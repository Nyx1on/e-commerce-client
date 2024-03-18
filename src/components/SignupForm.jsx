import React, { useRef } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import apiClient from "../helpers/apiClient";

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
      return alert("Passwords do not match");
    }

    try {
      const res = await apiClient.post("/user/registration", newUserData);
      console.log("User registered successfully", res.data);
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
        <FormInput
          placeholder="User Name"
          type="text"
          ref={userNameRef}
          // handleChange={this.handleChange}
        />
        <FormInput
          placeholder="Email"
          type="email"
          ref={emailRef}
          // handleChange={this.handleChange}
        />
        <input type="text" ref={userNameRef} />
        <FormInput
          placeholder="Password"
          type="password"
          ref={passwordRef}
          // handleChange={this.handleChange}
        />
        <FormInput
          placeholder="Confirm Password"
          type="password"
          ref={confirmPasswordRef}
          // handleChange={this.handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
