import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>

<div class="drawer drawer-mobile">
  <input id="dash-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
  <h2 className='text-3xl font-serif text-slate-700 my-3 font-bold'>welcome to dashboard</h2>
<Outlet></Outlet>

   
  
  </div> 
  <div class="drawer-side">
    <label for="dash-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">up</Link></li>
      <li><Link to="/dashboard/profile">portfolio</Link></li>
    </ul>
  
  </div>
</div>
    </div>
  )
}
