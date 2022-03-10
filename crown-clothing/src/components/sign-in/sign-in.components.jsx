import React, { useState } from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";

import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ ...userCredentials, email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN </CustomButton>
          <CustomButton
            type="button"
            onClick={SignInWithGoogle}
            isSignInWithGoogle
          >
            {" "}
            SIGN IN WITH GOOGLE{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
