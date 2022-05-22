import React, { useState } from 'react'
import PageTitle from '../common/PageTitle'
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Progressing from '../common/Progressing';
import GoogleSign from './GoogleSign';


export default function Register() {
  const [signUp, setSignUp] = useState();
  
  const [createUserWithEmailAndPassword, 
    user,
    loading, 
    error] =
    useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigation = () => {
      navigate("/inventory")
    }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (loading ) {
    return <Progressing></Progressing>;
  }

  let errorElement;
  if (loading) {
    return <Progressing />
  }
    if (user) {
      console.log("user", user);
      navigate("/")
    }
    if (error) {
      errorElement = <p className="text-red-600"> Error: {error?.message}</p>
    }
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    await createUserWithEmailAndPassword(email, password);

    console.log(name,email,password);
  };
  return (
    <div>

<h1  className='my-3 fw-bold text-5xl font-serif	 text-zinc-900' >Register Here</h1>
<PageTitle title="Register" />
<form
        className="w-full max-w-xs mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        
        <label class="label">
          <span class="label-text">Enter Your Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Type here Name"
          className="input input-bordered  input-primary w-full max-w-xs"
          {...register("name", { required: true })}
        />
        <label class="label">
          <span class="label-text">Enter Your Email</span>
        </label>
        <input
          type="email"
          name="email"
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
          name="password"
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
      <p>Already have an account? <Link to="/login" className='text-indigo-900 text-decoration-none'> Please Login</Link> </p>
      {errorElement}
      <GoogleSign />
</div>


  )
    }
