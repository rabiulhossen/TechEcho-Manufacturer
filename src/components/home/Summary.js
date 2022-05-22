import React from 'react'

export default function Summary() {
  return (
    <div>
         <h1 className='my-8 fw-bold text-5xl font-serif text-zinc-900'>Our Success Rate</h1>
<div className="stats shadow-lg px-8 py-6 mb-10 mt-4  ">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title text-xl text-orange-500 font-serif">Website Visit</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc text-accent">40% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title  text-xl text-orange-500 font-serif">Total Consumer</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://api.lorem.space/image/face?w=128&h=128" />
        </div>
      </div>
    </div>
    <div className="stat-value">90%</div>
    <div className="stat-title text-pink-500">Success Rate</div>
    <div className="stat-desc ">On Time delivery</div>
  </div>
  
</div>

    </div>
  )
}
