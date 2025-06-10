import { ButtonsContainer, SignInContainer } from './sign-in-form.styles'
import FormInput from '../form-input/form-input.component'
import { useState, FormEvent, ChangeEvent } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { useDispatch } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action'

const SignInForm = () => {
  const defaultFormFields = {
    email: '',
    //not store these info inside our database
    password: '',
  }

  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  //destructuring
  const { email, password } = formFields
  // console.log(formFields);

  //to clean up the form after submitting
  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }
  const signInWithGoogle = () => {
    dispatch(googleSignInStart())
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    //prevent reload the page
    event.preventDefault()
    //make sure that the password is confirmed
    //try and catch: to sign in with email
    try {
      //response.user
      dispatch(emailSignInStart(email, password))
      resetFormField()
    } catch (error) {
      console.log(error, 'user sign in failed')
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
