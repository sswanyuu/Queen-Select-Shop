import {
  Total,
  Hr,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './cart-dropdown.styles'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Hr></Hr>
      <Total>Total : ${total}</Total>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        children="Check out"
        onClick={goToCheckoutHandler}
      />
    </CartDropdownContainer>
  )
}
export default CartDropdown
