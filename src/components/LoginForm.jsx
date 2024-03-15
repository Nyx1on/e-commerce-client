import React from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const LogInForm = () => {
  return (
    <div className="sign-in" style={{ width: "33%", padding: "0px 50px" }}>
      <h2>I already have an account </h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          placeholder="Email"
          type="email"
          // handleChange={this.handleChange}
        />
        <FormInput
          placeholder="Password"
          type="password"
          // handleChange={this.handleChange}
        />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default LogInForm;
