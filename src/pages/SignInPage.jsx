import React from "react";
import "../styles/signIn.styles.scss";
import LogInForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { ToastContainer } from "react-toastify";

const SignInPage = () => {
  return (
    <>
      <div
        className="sign-in-and-sign-up"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <LogInForm />
        <SignupForm />
        <ToastContainer />
      </div>
    </>
  );
};

export default SignInPage;
