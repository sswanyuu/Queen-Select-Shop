import { AuthenticationContainer } from './authentication.styles'
import SignInForm from '../../sign-in-form/sign-in-form.component'
import SignUpForm from '../../sign-up-form/sign-up-form.component'
const Authentication = () => {
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
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}
export default Authentication
