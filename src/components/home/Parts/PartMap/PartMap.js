import React, { useEffect, useState } from "react";
import "./PartMap.css";
import Part from '../Part.js';
export default function PartMap() {
  const [show, setShow] = useState([]);
console.log("show",show);
  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, []);
  return (
    <div>

      <h1>Our Product Intro</h1>

      <div className="part-container">
        {show.map((partt) => {
          <Part key={partt._id} partt={partt}></Part>;
        })}
      </div>
    </div>
  );
}
