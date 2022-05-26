import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>

<div className="drawer drawer-mobile">
  <input id="dash-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
  <h2 className='text-3xl font-serif text-slate-700 my-3 font-bold'>My Dashboard</h2>
<Outlet></Outlet>

   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dash-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">


      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard" className='font-bold font-serif'>My Profile</Link></li>
      <li><Link to="/dashboard/order" className='font-bold font-serif'>My Order</Link></li>
      <li><Link to="/dashboard/addreview" className='font-bold font-serif'>Add a Review</Link></li>
    </ul>
  
  </div>
</div>
    </div>
  )
}
