import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Reviews() {
     const navigate =useNavigate();
     const partsPurshase =(id) =>{
          navigate("/")
     }
  return(
       <div>reviews</div>
  )
}
