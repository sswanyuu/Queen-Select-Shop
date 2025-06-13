import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'

import CheckoutItem from '../../checkout-item/checkout-item.component'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../../store/cart/cart.selector'
import PaymentForm from '../../payment-form/payment-form.component'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total : ${total}</Total>
      <PaymentForm></PaymentForm>
    </CheckoutContainer>
  )
}

export default Checkout
