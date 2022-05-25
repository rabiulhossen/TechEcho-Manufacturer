import React from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../../common/PageTitle";
import "./HomePart.css";

export default function HomePart({ part }) {
  console.log(part);
  const { name, price, Quantity, available, about, img } = part;
  const navigate = useNavigate();
  const serviceDetails = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="parts">

      <img className="w-100% pl-2 pr-4 rounded-xl" style={{ height: "350px" }} src={img} alt="" />

      <h3 className="px-2 text-2xl mt-2 font-serif font-medium">Name:{name}</h3>

      <h4 className="px-2 text-xl mt-2 font-serif font-medium">
        Description:{about}
      </h4>

      <h5 className="px-2 text-2xl mt-1 font-serif font-medium">
        {" "}
        Price:{price}
      </h5>

      <h5 className="px-2 text-2xl mt-1 font-serif font-medium">
        {" "}
        Quantity:{Quantity}
      </h5>

      <h5 className="px-2 text-2xl mt-1 mb-3 font-serif font-medium">
        Available Quantity:{available}
      </h5>
      <button
        onClick={() => serviceDetails(part._id)}
        className="primary btn-wide font-serif font-bold"
      >
        book now
      </button>
    </div>
  );
}
