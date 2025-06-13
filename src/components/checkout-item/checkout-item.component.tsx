import { useState, useEffect } from 'react'
import {
  CheckoutItemContainer,
  RemoveButton,
  Image,
  ProductDetails,
  Description,
  Price,
  Quantity,
  Arrow,
  Value,
} from './checkout-item.styles'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import {
  addItemToCart,
  removeItemFromCart,
  removeItemWhenCheckout,
} from '../../store/cart/cart.action'
import { FC } from 'react'
import { CartItem as TCartItem } from '../../store/cart/cart.types'
import { BREAKPOINT_VALUES } from '../../utils/breakpoints'

type CheckoutProps = {
  cartItem: TCartItem
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= BREAKPOINT_VALUES.mobile)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

const DesktopCheckoutItem: FC<CheckoutProps> = ({ cartItem }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const addItemhandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
  const removeItemWhenCheckoutHandler = () => dispatch(removeItemWhenCheckout(cartItems, cartItem))
  const { imageUrl, name, price, quantity } = cartItem

  return (
    <CheckoutItemContainer>
      <Image>
        <img src={imageUrl} alt={name} />
      </Image>
      <Description>{name}</Description>
      <Price>${price}</Price>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemhandler}>&#10095;</Arrow>
      </Quantity>
      <RemoveButton onClick={removeItemWhenCheckoutHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

const MobileCheckoutItem: FC<CheckoutProps> = ({ cartItem }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const addItemhandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
  const removeItemWhenCheckoutHandler = () => dispatch(removeItemWhenCheckout(cartItems, cartItem))
  const { imageUrl, name, price, quantity } = cartItem

  return (
    <CheckoutItemContainer>
      <Image>
        <img src={imageUrl} alt={name} />
      </Image>
      <ProductDetails>
        <Description>{name}</Description>
        <Price>${price}</Price>
        <Quantity>
          <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={addItemhandler}>&#10095;</Arrow>
        </Quantity>
        <RemoveButton onClick={removeItemWhenCheckoutHandler}>Remove</RemoveButton>
      </ProductDetails>
    </CheckoutItemContainer>
  )
}

const CheckoutItem: FC<CheckoutProps> = ({ cartItem }) => {
  const isMobile = useIsMobile()

  return isMobile ? (
    <MobileCheckoutItem cartItem={cartItem} />
  ) : (
    <DesktopCheckoutItem cartItem={cartItem} />
  )
}

export default CheckoutItem
