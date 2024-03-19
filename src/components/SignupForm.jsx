import React, { useRef } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import apiClient from "../helpers/apiClient";
import { toast } from "react-toastify";

const SignupForm = () => {
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUserData = {
      name: userNameRef.current.value,
      email: emailRef.current.value,
      password1: passwordRef.current.value,
      password2: confirmPasswordRef.current.value,
    };

    console.log(newUserData);

    if (newUserData.password1 !== newUserData.password2) {
      toast.error("Passwords do not match");
    }

    try {
      const res = await apiClient.post(
        "/api/v1/user/registration",
        newUserData
      );
      if (res.status == 200) {
        console.log("User registered successfully", res.data);
        toast.success("Successfully registered the user");
      }

      // Handle success
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error
    }
  };

  return (
    <div className="sign-up" style={{ width: "33%", padding: "0px 50px" }}>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput placeholder="User Name" type="text" ref={userNameRef} />
        <FormInput placeholder="Email" type="email" ref={emailRef} />
        <FormInput placeholder="Password" type="password" ref={passwordRef} />
        <FormInput
          placeholder="Confirm Password"
          type="password"
          ref={confirmPasswordRef}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
