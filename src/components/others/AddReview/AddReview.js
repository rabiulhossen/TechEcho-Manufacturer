import React from 'react'
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";



export default function AddReview() {

     const { register, handleSubmit } = useForm();
     const onSubmit = data =>{ console.log(data);
        toast('WoW! Your Review Added in HomePage', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
 const url = "https://ancient-hamlet-69799.herokuapp.com/reviews";
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
     <div className='addDiv'>
     <h1 className='text-center text-zinc-900 my-5 text-3xl font-semiBold font-serif'>Add User Experience</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

     
<input className='input input-bordered z-20 my-4 shadow-2xl rounded-lg w-full max-w-xs'placeholder='User Name' {...register("name", {required: true})} />
 <br/>


<input className='input input-bordered z-20  shadow-2xl rounded-lg w-full max-w-xs'placeholder='User image Url' {...register("img", {required: true})} />
 <br />
<input className='input input-bordered z-20 my-4 shadow-2xl rounded-lg w-full max-w-xs' placeholder='Rating' type="text" {...register("rating", {  min:1, max:5 })} />  
<br />
<textarea className='input input-bordered min-h-16 z-20 shadow-2xl mb-4 rounded-lg w-full max-w-xs'placeholder='About Our Service' {...register("about", {required: true})} />
<br />

<input className='my-3 ml-2 btn btn-wide addButton font-bold font-serif px-8' type="submit" value="Add Review" />
</form>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
 </div>
  )
}
