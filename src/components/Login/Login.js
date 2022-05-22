import React, { useRef, useState } from "react";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Progressing from "../common/Progressing";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../common/PageTitle";
import { useForm } from "react-hook-form";
import GoogleSign from "./GoogleSign";

export default function Login() {
  
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [SendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

let errorElement;

  if (loading || sending ) {
    return <Progressing></Progressing>;
  }

  if (error) {
    return( errorElement = <p className="text-red-600"> Error: {error?.message}</p>);
  }

  if (user) {
    navigate("/home");
  }
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);

    console.log(data);
  };

  return (
    <div>
      <h1 className="my-3 fw-bold text-5xl font-serif	 text-zinc-900">
        Login Information
      </h1>
      <PageTitle title="Login"></PageTitle>

      <form
        className="w-full max-w-xs mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        
        <label class="label">
          <span class="label-text">Enter Your Email</span>
        </label>
        <input
          type="email"
          placeholder="Type here Email"
          className="input input-bordered  input-primary w-full max-w-xs"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && "Email is required"}
        <label class="label">
          <span class="label-text">Enter Your Password</span>
        </label>
        <input
          type="password"
          placeholder="Type here Password"
          className="input input-bordered  input-primary w-full max-w-xs"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && "password is required"}

        <input
          className=" btn btn-block btn-info mt-8 mb-2"
          type="submit"
          value="Submit"
        />
      </form>
      <p>New User? <Link to="/register" className='text-indigo-900 text-decoration-none'> Please Register</Link> </p>
      {errorElement}
      <GoogleSign />
    </div>
  );
}
