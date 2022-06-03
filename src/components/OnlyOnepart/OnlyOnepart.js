import React ,{useEffect, useState}from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import PageTitle from '../common/PageTitle';
import { useForm } from "react-hook-form";

export default function OnlyOnepart() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);

    toast.success('Updated Successful', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  }

  return (
    <div>
      <h1 className='font-serif text-3xl my-3'>Update Your Profile</h1>
<form
        className="w-full max-w-xs mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        
        <label className="label">
          <span className="label-text">Enter Your New Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Type here Name"
          className="input input-bordered mb-3  input-primary w-full max-w-xs"
          {...register("name", { required: true })}
        />
        <label className="label">
          <span className="label-text">Enter Your Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Type here Email"
          className="input input-bordered mb-3 input-primary w-full max-w-xs"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && "Email is required"}
        <label className="label">
          <span className="label-text">Enter Linkedin Profile</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Type Linkedin Profile"
          className="input input-bordered mb-3 input-primary w-full max-w-xs"
          {...register("linkedin", { required: true })}
        />
        <label className="label">
          <span className="label-text">Enter Facebook Profile</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Type Facebook Profile"
          className="input input-bordered mb-3 input-primary w-full max-w-xs"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && "Facebook link is required"}
        <label className="label">
          <span className="label-text">Enter Your Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Type here Password"
          className="input input-bordered mb-3 input-primary w-full max-w-xs"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && "password is required"}

        <input
          className=" btn btn-block btn-info mt-8 mb-2"
          type="submit"
          value="Update"
        />
      </form>
<ToastContainer />

    </div>
  )
    
}
