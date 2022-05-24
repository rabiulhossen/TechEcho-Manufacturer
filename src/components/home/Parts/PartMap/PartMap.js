import React, {useEffect, useState} from 'react'
import './PartMap.css';
import Part from '../Part';

export default function PartMap() {

     const [show, setShow] = useState([])

     useEffect(() => {
          fetch("http://localhost:5000/parts")
            .then((res) => res.json())
            .then((data) => setShow(data));
        }, []);
  return (
    <div>

<h1>Our Product Intro</h1>

<div className='part-container'>

{
     show.map(parts => {
          <Part 
          key={parts._id} 
          parts={parts}
          
          ></Part>
     })
}

</div>
    

  
 
      
  
  </div>
  )
}
