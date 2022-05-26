import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";

export default function MyOrders() {

const [user,setUser] =useState([])
const navigate =useNavigate();
  const { id } = useParams();
  const { name, price, Quantity, available, img } = user;


  
  

  return (
    <div>
<h1 className="text-2xl font-serif mb-4 text-slate-900">
       My Product Information 
      </h1>
 <h1>name</h1>
 <h1>price </h1>
 Quantity

    </div>
  )
}


