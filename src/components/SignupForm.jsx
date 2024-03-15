import React from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const SignupForm = () => {
  return (
    <div className="sign-up" style={{ width: "33%", padding: "0px 50px" }}>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form>
        <FormInput
          placeholder="Display Name"
          type="text"
          // handleChange={this.handleChange}
        />
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
        <FormInput
          placeholder="Confirm Password"
          type="password"
          // handleChange={this.handleChange}
        />
        <Button type="submit">Login Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
