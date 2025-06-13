import { useRef, useEffect } from 'react'
import {
  Total,
  Hr,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  BackgroundCover,
} from './cart-dropdown.styles'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import { useDispatch } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.action'

const CartDropdown = () => {
  const dispatch = useDispatch()
  const cartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        dispatch(setIsCartOpen(false))
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dispatch])

  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    navigate('/checkout')
    dispatch(setIsCartOpen(false))
  }

  const handleBackgroundClick = () => {
    dispatch(setIsCartOpen(false))
  }

  return (
    <>
      <BackgroundCover onClick={handleBackgroundClick} />
      <CartDropdownContainer ref={cartRef}>
        <CartItemsContainer>
          {cartItems.length ? (
            cartItems.map((item) => {
              return <CartItem key={item.id} cartItem={item} />
            })
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItemsContainer>
        <Hr />
        <Total>Total : ${total}</Total>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          children="Check out"
          onClick={goToCheckoutHandler}
        />
      </CartDropdownContainer>
    </>
  )
}

export default CartDropdown
