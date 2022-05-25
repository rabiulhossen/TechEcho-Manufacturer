import React from 'react'


export default function Summary() {
  return (
    <div>
         <h1 className='my-8 text-5xl font-serif text-zinc-900'>Our Success Rate</h1>
<div className=" shadow px-8 py-6 mb-10 mt-4  text-center lg:w-3/5 justify-center mx-auto rounded-none ">
  
  <div className="stat bg-slate-100 rounded-xl  text-justify mx-auto lg:rounded-none">
    <div className="stat-figure text-primary">
      <p className='font-bold font-serif'>Total</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-11 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
     <p className='font-bold font-serif'>React 70%</p>
    </div>
    <div className="stat-title text-xl text-orange-500 font-serif">Website Visit</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc text-accent">40% more than last month</div>
   
  </div>
  
  <div className="stat bg-slate-100 rounded-xl text-justify ">
    <div className="stat-figure text-secondary">
      <p className='font-bold font-serif'>Total</p>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-19 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
      <p className='font-bold font-serif'>tool 50+</p>
    </div>
    <div className="stat-title  text-xl text-orange-500 font-serif">Total Consumer</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat bg-slate-100 rounded-xl text-justify lg:rounded-none">
    <div className="stat-figure text-secondary">
      
       
        <p className=" font-bold font-serif  text-zinc-900">Shipment </p>
       
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block  text-zinc-900 w-10 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
<p className=" font-bold font-serif  text-zinc-900">On Time</p>
        </div>
      
   
    <div className="stat-value text-zinc-900">90%</div>
    <div className="stat-title text-pink-500">Success Rate</div>
   
  </div>
  
</div>

    </div>
  )
}
