import { ButtonsContainer, SignInContainer } from './sign-in-form.styles'
import FormInput from '../form-input/form-input.component'
import { useState, FormEvent, ChangeEvent } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { useDispatch } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action'
import { showNotification } from '../../store/notification/notification.action'

const SignInForm = () => {
  const dispatch = useDispatch()
  const defaultFormFields = {
    email: '',
    //not store these info inside our database
    password: '',
  }

  const [formFields, setFormFields] = useState(defaultFormFields)
  //destructuring
  const { email, password } = formFields
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
    try {
      dispatch(emailSignInStart(email, password))
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
    <SignInContainer>
      <h2>Already have an account</h2>
      <span>Sign in with e-mail and password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <Button type="submit" children="Sign in" />
          <Button
            onClick={signInWithGoogle}
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            children="Google Sign in"
          />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm
