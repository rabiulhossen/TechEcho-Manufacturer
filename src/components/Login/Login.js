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
import { toast, ToastContainer } from "react-toastify";

export default function Login() {

  const emailRef = useRef('');
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

  const passwordReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await SendPasswordResetEmail(email);
      toast.success('check your email!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  
    } else {
      toast.warn('🦄 enter your email!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };

  if (user) {
    navigate("/dashboard");
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
        
        <label className="label">
          <span className="label-text">Enter Your Email</span>
        </label>
        <input
          type="email"
          placeholder="Type here Email"
          className="input input-bordered  input-primary w-full max-w-xs"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && "Email is required"}
        <label className="label">
          <span className="label-text">Enter Your Password</span>
        </label>
        <input
          type="password"
          placeholder="Type here Password"
          className="input input-bordered  input-primary w-full max-w-xs"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && "password is required"}

        <input
          className=" btn btn-block btn-info mt-8 mb-3"
          type="submit"
          value="Submit"
        />
      </form>
      <p>New User? <Link to="/register" className=' btn-link text-decoration-none uppercase pl-2 font-serif font-bold text-slate-900 pt-3'> Please Register</Link> </p>
      <p>
        Forget Password?
        <button
          onClick={passwordReset}
          className="btn btn-link text-slate-900 font-serif font-bold pe-auto text-decoration-none"
        >
          Reset Password
        </button>
      </p>

      {errorElement}
      <GoogleSign />

      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        >

        </ToastContainer>
    </div>
  );
}
