import React, { useRef, useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import apiClient from "../helpers/apiClient";
import authClient from "../helpers/authClient";
import { useDispatch, useSelector } from "react-redux";
import { loginFailed, loginSucess } from "../redux/action/user/user.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const LogInForm = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: userNameRef.current.value,
      password1: passwordRef.current.value,
    };
    setLoading(true);
    try {
      const res = await apiClient.post("/api/v1/user/login", userData);
      console.log(res.status);
      const { token } = res.data;
      authClient.storeTokenLocally(token);

      // authClient.setAuthToken(localStorage.getItem("token"));
      if (token) {
        dispatch(loginSucess(userData));
        toast.success("Successfully logged in");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        dispatch(loginFailed());
      }
    } catch (error) {
      console.error("Error logging in user:", error);
    }
    setLoading(false);
  };

  return (
    <>
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
          <Button type="submit" disabled={loading}>
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
};

export default LogInForm;
