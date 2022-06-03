import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import PageTitle from "../../../common/PageTitle";
import { useForm } from "react-hook-form";
import UserDetail from "../UserDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

export default function Purchase() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [reload, setReload] = useState(false);

  const [user, loading] = useAuthState(auth);

  const { name, price, Quantity, available, about, img, _id } = show;
  // console.log(show);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, id) => {
    const quantity =data.quantity
    console.log( "what is u", Quantity);
    if (quantity < Quantity) {
      toast('🦄 Minimun Quantity is');
    } 
    else if (quantity > available) {
      toast.warn('🦄 Maximum Quantity is ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
toast.success('Quantity Added')

    }

    
  };

  useEffect(() => {
    fetch(`https://ancient-hamlet-69799.herokuapp.com/parts/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, [reload]);

  return (
    <div className="mx-auto my-10 ">
      <div className="border-4 border-slate-300 mb-4 rounded-lg mx-auto shadow-slate-200 shadow-2xl w-3/5">
        <h1 className="text-xl bg-primary font-serif mb-4 text-slate-900">
          User Information
        </h1>

        {/* <h1 className="text-lg font-serif mb-2 text-slate-900">
       userName:{user.displayName}
      </h1> */}
        <h1 className="text-lg font-serif mb-2 text-slate-900">
          userEmail :{user.email}
        </h1>
      </div>
      <h1 className="text-2xl font-serif mb-4 text-slate-900">
        Product Information :{name}
      </h1>
      <PageTitle title="Product-details" />
      <div className="card w-3/5 bg-base-100 shadow-xl image-full mx-auto text-left text-white">
        <figure>
          <img src={img} alt="Shoes" className="opacity-90" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">Min Order:{Quantity}</h2>
          <h2 className="card-title">Available:{available}</h2>
          <h2 className="card-title">Price Per Piece:{price}</h2>
          <p>{about}</p>
          <p>id:{_id}</p>
          <div className="card-actions justify-start items-center mt-3 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input shadow-2xl text-zinc-900 rounded-lg w-1/3"
                placeholder="Your Quantity"
                type="number"
                {...register("qunatity", {
                  min: `${Quantity}`,
                  max: `${available}`,
                })}
              />
              {errors.quantity?.type === "required" &&
                "Min Qunatity is required"}

              <input
                className="btn btn-primary font-semiBold font-bold mx-auto font-serif"
                type="submit"
                value="Confirm"
              />
            </form>
            <UserDetail />
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
