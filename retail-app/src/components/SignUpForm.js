import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../api/auth";
import "./SignUpForm.css";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    registerUser(data);
    setSuccessMessage("🎉 Account created successfully!");
    setTimeout(() => navigate("/home"), 2000);  // Redirect to Home Page after 2 seconds
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an Account</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Username</label>
            <input {...register("username")} placeholder="Enter your username" />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input {...register("email")} placeholder="Enter your email" />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" {...register("password")} placeholder="Enter a secure password" />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" {...register("confirmPassword")} placeholder="Confirm your password" />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;