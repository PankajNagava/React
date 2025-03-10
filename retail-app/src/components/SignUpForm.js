import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../api/auth";  // Handles local storage
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
    setTimeout(() => navigate("/users"), 2000);  // Redirect after 2 seconds
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input {...register("username")} />
        {errors.username && <p className="error">{errors.username.message}</p>}

        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
