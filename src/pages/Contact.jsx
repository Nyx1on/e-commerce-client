import React from "react";
import FormInput from "../components/FormInput";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <>
      <div
        className="sign-up"
        style={{
          width: "33%",
          padding: "0px 50px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <h2>Contact Me</h2>
        <span>Send your queries regarding the shop</span>
        <form>
          <FormInput
            placeholder="Full Name"
            type="text"
            // handleChange={this.handleChange}
          />
          <FormInput
            placeholder="Email"
            type="email"
            // handleChange={this.handleChange}
          />
          <FormInput
            placeholder="Message"
            type="text"
            // handleChange={this.handleChange}
          />
          <Button type="submit">Contact Me</Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
