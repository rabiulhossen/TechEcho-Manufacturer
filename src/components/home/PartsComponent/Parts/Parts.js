import React, { useEffect, useState } from "react";
import HomePart from "../HomePart/HomePart";

export default function Parts() {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <div>
      <h4 className="text-5xl text-zinc-900 pb-3 font-semiBold font-serif text-center">
      

        Our Product Intro
      </h4>
      <div>
{
    parts && parts.map(part =>
          <HomePart 
          key={part._id}
          part={part}
          />
     )
}

      </div>
    </div>
  );
}
