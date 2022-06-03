import React from "react";
import { useForm } from "react-hook-form";
import './NewsLetter.css';
import back from '../../../resources/img/email.jpg'
import chalkAnimation from 'chalk-animation';
import { motion } from "framer-motion"
import { toast, ToastContainer } from "react-toastify";


export default function NewsLetter() {
  // const rainbow = chalkAnimation.rainbow('Stay Update with Us Newsletter'); 
  // rainbow.render();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const name = data.name;
    toast('Thank You for staying with us', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    console.log(data);
  };

  return (


    <div className="mt-16 newsDiv rounded-lg">
   
     <div className="form-div">
     <h1 className="text-3xl z-10 font-serif text-black">
     
     {/* {rainbow} */}
   Stay Update with Us <span className="shadow-xl rounded-md text-purple-700 font-semibold text-3xl px-1 z-10">Newsletter</span>
     </h1>
     <div></div>
     <form
       className="w-full max-w-xs mx-auto"
       onSubmit={handleSubmit(onSubmit)}
     >
       <label className="label">
         <span className="label-text text-primary">Enter Your Name</span>
       </label>
       <input
         type="text"
         placeholder="Type here Name"
         className="input input-bordered z-20 text-black  shadow-2xl rounded-lg w-full max-w-xs"
         {...register("name", { required: true })}
       />
       {errors.email?.type === "required" && "Name is required"}
       
       <label className="label">
         <span className="label-text text-primary">Enter Your Email</span>
       </label>
       <input
         type="email"
         placeholder="Type here Email"
         className="input shadow-3xl w-full text-black max-w-xs"
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
     <img src={back} className='bg-image' alt="" />
     <ToastContainer />
    </div>
  );
}



// eslint-disable-next-line no-unused-expressions
