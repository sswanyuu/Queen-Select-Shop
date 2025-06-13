import {
  CheckoutItemContainer,
  RemoveButton,
  Image,
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
type CheckoutProps = {
  cartItem: TCartItem
}
const CheckoutItem: FC<CheckoutProps> = ({ cartItem }) => {
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

      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemhandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={removeItemWhenCheckoutHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}
export default CheckoutItem
