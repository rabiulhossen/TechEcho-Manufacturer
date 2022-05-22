import React from 'react'

export default function Login() {
  return (
    <div>
<h1  className='my-3 fw-bold text-5xl font-serif	 text-zinc-900' >Login Information</h1>

<div class="form-control w-full max-w-xs mx-auto">
  <label class="label">
    <span class="label-text">Your Email</span>
  </label>
  <input type="text" placeholder="Type here Email" class="input input-bordered  input-primary w-full max-w-xs" required />
 
</div>
<div class="form-control w-full max-w-xs mx-auto mt-0 mb-4">
  <label class="label">
    <span class="label-text">Your Password</span>
  </label>
  <input type="text" placeholder="Type here Password" class="input input-bordered  input-primary w-full max-w-xs" required/>
  <input type="submit" value="Submit" class="btn btn-info my-8" />
</div>

    </div>
  )
}
