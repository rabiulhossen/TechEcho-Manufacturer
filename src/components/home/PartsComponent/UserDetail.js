import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';


export default function UserDetail() {
    const navigate =useNavigate();
    const { id } = useParams();
    const [show, setShow] = useState({});
    const [reload, setReload] = useState(false);

    const [user] = useAuthState(auth);
     const { register,
         formState: { errors }, 
         handleSubmit } = useForm();
         
     const onSubmit = data =>{ console.log(data);
 const url = "https://ancient-hamlet-69799.herokuapp.com/address";
 fetch(url,{
     method:'POST',
 headers:{
     'content-type':'application/json'
 
 },
 body:JSON.stringify(data)
 })
 .then(res=>res.json())
 .then(result =>{
     console.log(result)
 })

 navigate("/dashboard/order");
 toast.success('Your Information saved')
 
 
     };

  return (
    <div>

<div className='addDiv'>
     <h1 className='text-center text-white mb-3 mt-10 text-3xl font-semiBold font-serif'>Product Shipment Address</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

     
<input className='input input-bordered text-black z-20 my-4 shadow-2xl rounded-lg w-full max-w-xs'placeholder='User Name' {...register("name", {required: true})} />
{errors.name?.type === "" && "Name is required"}
 <br/>


<input className='input input-bordered  text-black z-20 shadow-inner input-disabled  rounded-lg w-full max-w-xs'placeholder='email' value={user.email} {...register("email", {required: true})} />
 <br />
<input className='input input-bordered  text-black z-20 my-4 shadow-2xl rounded-lg w-full max-w-xs' placeholder='mobile number' type="text" {...register("number" ,{required:true,maxLength:11, minLength:11})} />  
{errors.number?.type === "required" && "Number is Proper"}
<br />
<textarea className='input input-bordered text-black  min-h-16 z-20 shadow-2xl mb-4 rounded-lg w-full max-w-xs'placeholder='Address' type='text' {...register("address", {required: true})} />
{errors.Address?.type === "" && "Address is required"}

<br />

<input className='my-3 ml-2 btn btn-wide bg-primary text-gray-900 addButton font-bold font-serif px-10' type="submit" value="Submit" />
</form>
 </div>
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
          ></ToastContainer>

    </div>
  )
}
