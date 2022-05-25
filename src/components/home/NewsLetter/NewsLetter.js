import React from "react";
import { useForm } from "react-hook-form";
import './NewsLetter.css';

export default function NewsLetter() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    console.log(data);
  };

  return (
    <div className="mt-16 newsDiv rounded-lg">
      <h1 className="text-2xl z-10 font-serif">
        Stay Update with Us <span className="shadow-xl rounded-md text-orange-600 to-purple-700 font-semibold text-3xl px-1 z-10">Newsletter</span>
      </h1>
      <div></div>
      <form
        className="w-full max-w-xs mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="label">
          <span className="label-text">Enter Your Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here Name"
          className="input input-bordered z-20 shadow-2xl rounded-lg w-full max-w-xs"
          {...register("name", { required: true })}
        />
        {errors.email?.type === "required" && "Name is required"}
        
        <label className="label">
          <span className="label-text">Enter Your Email</span>
        </label>
        <input
          type="email"
          placeholder="Type here Email"
          className="input shadow-3xl w-full max-w-xs"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && "Email is required"}
        

        <input
          className=" btn btn-block bg-accent text-red-100 mt-6 mb-2, hover:bg-orange-300 text-zinc-800"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
