import React ,{useEffect, useState}from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageTitle from '../common/PageTitle';

export default function OnlyOnepart() {

  const { id } = useParams();
  const [show, setShow] = useState({});
  const [reload,setReload] =useState(false);

  const { name, price, Quantity, available, about, img, _id } = show;
  
useEffect(() => {
  fetch(`http://localhost:5000/parts/${id}`)
  .then(res => res.json())
  .then(data => setShow(data));

}, [reload])



const updateDelivery = (id,q) => {

  if(q> 50 ){
    let Quantity = parseInt(q) + 1;
    const data = { Quantity };
    const url = `http://localhost:5000/parts/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setReload(!reload)
      });
      
  }
  else{
    toast("Minimum Quantity is {Quantity}")
  }
 
};




  return (
    <div className='mx-auto my-10'>
      <h1 className='text-2xl font-serif mb-2 text-slate-900'>Product Information</h1>
<PageTitle title="Product-details" />
<div class="card w-96 bg-base-100 shadow-xl image-full mx-auto text-left text-white">
  <figure><img src={img} alt="Shoes" className='hover:opacity-90' /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <h2 class="card-title">Min Order:{Quantity}</h2>
    <h2 class="card-title">Available:{available}</h2>
    <p>{about}</p>
    <div class="card-actions justify-end mt-3">
      <button 
      onClick={()=>updateDelivery(id,Quantity)}
      class="btn btn-primary font-semiBold">Add Cart</button>
    </div>
  </div>
</div>



    </div>
  )
}
