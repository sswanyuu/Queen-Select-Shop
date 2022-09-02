import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
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

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  //destructuring
  const { email, password } = formFields;
  console.log(formFields);

  //to clean up the form after submitting
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    // // let the useContext do it!
    //     createUserDocumentFromAuth(response.user);
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
          <Button type="submit" onClick={handleSubmit} children="Sign in" />
          <Button
            onClick={signInWithGoogle}
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            children="Google Sign in"
          />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
