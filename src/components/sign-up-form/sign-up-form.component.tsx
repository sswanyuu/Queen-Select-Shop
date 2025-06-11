import { SignUpContainer, ButtonsContainer } from './sign-up-form.styles'
import FormInput from '../form-input/form-input.component'
import { useState, FormEvent, ChangeEvent } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { useDispatch } from 'react-redux'
import { signUpStart, googleSignInStart } from '../../store/user/user.action'
import { showNotification } from '../../store/notification/notification.action'

const defaultFormFields = {
  displayName: '',
  email: '',
  //not store these info inside our database
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  //destructuring
  const { displayName, email, password, confirmPassword } = formFields
  // console.log(formFields);
  //to clean up the form after submitting
  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }
  const signInWithGoogle = async () => {
    try {
      dispatch(googleSignInStart())
    } catch (error) {
      dispatch(showNotification((error as Error).message, 'error'))
    }
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      dispatch(showNotification("Passwords don't match", 'error'))
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormField()
    } catch (error) {
      dispatch(showNotification((error as Error).message, 'error'))
    }
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email or Google</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />

        <FormInput
          label="E-mail"
          type="e-mail"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign Up</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
            Sign up with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  )
}
export default SignUpForm
