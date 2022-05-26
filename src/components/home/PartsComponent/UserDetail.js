import React from 'react'
import { useForm } from "react-hook-form";


export default function UserDetail() {


     const { register, handleSubmit } = useForm();
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
 
 
 
     };

  return (
    <div>

<div className='addDiv'>
     <h1 className='text-center text-zinc-900 mb-3 mt-10 text-3xl font-semiBold font-serif'>User Shipment Address</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

     
<input className='input input-bordered z-20 my-4 shadow-2xl rounded-lg w-full max-w-xs'placeholder='User Name' {...register("name", {required: true})} />
 <br/>


<input className='input input-bordered z-20  shadow-2xl rounded-lg w-full max-w-xs'placeholder='email' {...register("email", {required: true})} />
 <br />
<input className='input input-bordered z-20 my-4 shadow-2xl rounded-lg w-full max-w-xs' placeholder='mobile number' type="number" {...register("number", {  min:1, max:5 })} />  
<br />
<textarea className='input input-bordered min-h-16 z-20 shadow-2xl mb-4 rounded-lg w-full max-w-xs'placeholder='Address' {...register("address", {required: true})} />
<br />

<input className='my-3 ml-2 btn btn-wide addButton font-bold font-serif px-8' type="submit" value="Submit" />
</form>
 </div>


    </div>
  )
}
