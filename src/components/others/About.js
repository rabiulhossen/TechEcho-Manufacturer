import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='my-12'>
         <h1 className='text-zinc-800 font-mono fw-bold my-4 text-2xl'>This is Inform you About Us,Stay With.</h1>
         <h2 className='fw-bold text-2xl font-mono'>Want to learn More <Link to='/home' className='text-yellow-600'>Click Here</Link></h2>
    </div>
  )
}
