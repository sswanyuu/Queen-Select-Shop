import { useState } from 'react'
import { AuthenticationContainer, ToggleButton } from './authentication.styles'
import SignInForm from '../../sign-in-form/sign-in-form.component'
import SignUpForm from '../../sign-up-form/sign-up-form.component'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../store/user/user.selector'
import { Navigate } from 'react-router-dom'

const Authentication = () => {
  const [isNewUser, setIsNewUser] = useState(true)
  const currentUser = useSelector(selectCurrentUser)

  // Redirect to welcome page if user is signed in
  if (currentUser) {
    return <Navigate to="/welcome" replace />
  }

  const toggleForm = () => {
    setIsNewUser(!isNewUser)
  }

  //-----------------------------------------------
  //Sign in  and creat document with google redirect method
  //   useEffect(
  //     //give the response which is just happened
  //     //the auth tracks all of our autentication
  //     //no matter what website are we surfing
  //     () => async () => {
  //       const response = await getRedirectResult(auth);
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     },
  //     //[]: run this function once the component is mount
  //     []
  //   );
  //--------------------------------------------
  //   when make a call to a database -> asynchronous function

  return (
    <AuthenticationContainer>
      {isNewUser ? <SignUpForm /> : <SignInForm />}
      <ToggleButton onClick={toggleForm}>
        {isNewUser ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </ToggleButton>
    </AuthenticationContainer>
  )
}

export default Authentication
