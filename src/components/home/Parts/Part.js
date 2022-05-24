import React from "react";
import { useNavigate } from "react-router-dom";
import "./Part.css";

export default function Part({ parts }) {

  const navigate = useNavigate();
  const serviceDetails = (_id) => {
    navigate("/inventory");
  };

  return (
    <div>
      <div className="partCon">
        <img className="img-fluid" style={{ height: "350px" }} src="" alt="" />
        <h3 className="px-2">Name:</h3>
        <h4>Distributor: </h4>
        <h4 className="fw-semi-bold pb-2 text-warning">Description:</h4>

        <button onClick={() => serviceDetails()} className="primary">
          manage
        </button>
      </div>
    </div>
  );
}
