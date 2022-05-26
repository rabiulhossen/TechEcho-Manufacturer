import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import PageTitle from "../../../common/PageTitle";
import { useForm } from "react-hook-form";

export default function Purchase() {
  const navigate =useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [reload, setReload] = useState(false);

  const { name, price, Quantity, available, about, img, _id } = show;
// console.log(show);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data ,id,q) => {

    if (q < Quantity) {
      toast.warn(`🦄 Minimun Quantity is ${Quantity}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
    } 
    else if (q > available){
      toast.warn(`🦄 Maximum Quantity is ${available}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else{
navigate("/dashboard/order")
      let Quantity = parseInt(q) + 1;
      const data = { Quantity };
      const url = `http://localhost:5000/parts/${id}`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setReload(!reload);
        });


    }


    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/parts/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, [reload]);

 
  return (
    <div className="mx-auto my-10">
      <h1 className="text-2xl font-serif mb-4 text-slate-900">
        Product Information :{name}
      </h1>
      <PageTitle title="Product-details" />
      <div class="card w-96 bg-base-100 shadow-xl image-full mx-auto text-left text-white">
        <figure>
          <img src={img} alt="Shoes" className="hover:opacity-90" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <h2 class="card-title">Min Order:{Quantity}</h2>
          <h2 class="card-title">Available:{available}</h2>
          <p>{about}</p>
          <div class="card-actions justify-end items-center mt-3 ">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input className='input shadow-2xl text-zinc-900 rounded-lg w-1/3' placeholder='Your Quantity' type="number" {...register("Qunatity",{min:50,max:300} )} /> 
            {errors.Quantity?.type === "required" && "Min Qunatity is required"}
              <input
                className="btn btn-primary font-semiBold font-bold ml-6 font-serif"
                type="submit"
                value="Click Order"
              />
            </form>
          </div>

          <ToastContainer
           position="top-center"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
          ></ToastContainer>
        </div>
      </div>
    </div>
  );
}
