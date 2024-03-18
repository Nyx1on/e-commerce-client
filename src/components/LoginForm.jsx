import React, { useRef } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import apiClient from "../helpers/apiClient";
import authClient from "../helpers/authClient";

const LogInForm = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: userNameRef.current.value,
      password1: passwordRef.current.value,
    };

    try {
      const res = await apiClient.post("/api/v1/user/login", userData);
      console.log(res.data);
      const { token } = res.data;
      authClient.storeTokenLocally(token);
      // authClient.setAuthToken(localStorage.getItem("token"));
    } catch (error) {
      console.error("Error logging in user:", error);
    }
  };

  return (
    <div className="sign-in" style={{ width: "33%", padding: "0px 50px" }}>
      <h2>I already have an account </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          placeholder="User Name"
          type="text"
          ref={userNameRef}
          // handleChange={this.handleChange}
        />
        <FormInput
          placeholder="Password"
          type="password"
          ref={passwordRef}
          // handleChange={this.handleChange}
        />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default LogInForm;
