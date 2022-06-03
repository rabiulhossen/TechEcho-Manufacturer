import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from "react-router-dom";
import auth from '../../firebase.init';

export default function MyOrders() {

const [parts,setParts] =useState([])

const [user] = useAuthState(auth);
const navigate =useNavigate();




  return (
    <div>
<h1 className="text-2xl font-serif mb-4 text-slate-900">
       My Product Information: { parts.length}
     </h1>
     <table className="table w-full">
       
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th> Cancel Order</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.part}</td>
                                <td><button className="bg-primary">delete</button> </td>
                            </tr>)
                        }


                    </tbody>
                </table>

</div>
  )
}


