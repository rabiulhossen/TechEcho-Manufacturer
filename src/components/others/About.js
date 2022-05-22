import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
         <h1 className='text-primary fw-bold my-4'>This is Inform you About Us Stay With.</h1>
         <h2 className='text-primary fw-bold'>Want to learn More <Link to='/about'>COntact US</Link></h2>
    </div>
  )
}
