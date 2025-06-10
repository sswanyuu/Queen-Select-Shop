import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { StripeCardElement } from '@stripe/stripe-js'
import { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { PaymentFormContainer, FormContainer, PaymentButton, CardTitle } from './payment-form.style'
import { useState, FormEvent } from 'react'
import { useSelector } from 'react-redux'
import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement =>
  card !== null

const PaymentForm = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }
    setIsProcessingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json())
    const {
      paymentIntent: { client_secret },
    } = response
    const cardDetail = elements.getElement(CardElement)
    if (!ifValidCardElement(cardDetail)) {
      return
    }
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetail,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    })
    setIsProcessingPayment(false)
    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful')
      }
    }
  }
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <CardTitle>Credit Card Payment</CardTitle>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          type="submit"
        >
          pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}
export default PaymentForm
