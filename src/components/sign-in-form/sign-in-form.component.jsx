import FormInput from "../form-input/form-input.component";
import { useState, useContext } from "react";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/users.context";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  email: "",
  //not store these info inside our database
  password: "",
};
const signInWithGoogle = async () => {
  const response = await signInWithGooglePopup();
  console.log(response);
  // destructuring
  createUserDocumentFromAuth(response.user);
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  //destructuring
  const { email, password } = formFields;
  console.log(formFields);
  const { setCurrentUser } = useContext(UserContext);
  //to clean up the form after submitting
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    //prevent reload the page
    event.preventDefault();
    //make sure that the password is confirmed
    //try and catch: to sign in with email
    try {
      //response.user
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormField();
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");

        default:
          console.log(error);
      }
      // if (error.code === "auth/wrong-password") {
      //   alert("Incorrect password for email");
      // } else if (){}
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
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
        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit} children="Sign in" />
          <Button
            onClick={signInWithGoogle}
            type="button"
            buttonType="google"
            children="Google Sign in"
          />
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
