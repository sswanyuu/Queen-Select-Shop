import { SignUpContainer } from './sign-up-form.styles'
import FormInput from '../form-input/form-input.component'
import { useState, FormEvent, ChangeEvent } from 'react'
import Button from '../button/button.component'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../store/user/user.action'
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
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    //prevent reload the page
    event.preventDefault()
    //make sure that the password is confirmed
    if (password !== confirmPassword) {
      alert('Passwords do not match.')
      return
    }
    //try and catch: to build a document
    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormField()
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user. E-mail already in use.  ')
      } else {
        console.log('User creation encountered an error.', error)
      }
    }
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with e-mail address</span>
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
        <Button type="submit" children="Sign Up" />
      </form>
    </SignUpContainer>
  )
}
export default SignUpForm
