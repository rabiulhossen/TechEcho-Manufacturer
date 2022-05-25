import React from 'react';
import banner1 from "../../resources/img/red.jpg";
import banner2 from '../../resources/img/cooler.jpg';
import banner3 from '../../resources/img/samsung.jpg';

export default function Bannner() {
  return (
    <div>
<div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={banner1} className="w-full h-3/5 "/>
  </div> 
  <div id="item2" className="carousel-item w-full ">
    <img src={banner2} className="w-full h-3/5 " />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={banner3} className="w-full  h-3/5" />
  </div> 

</div> 
<div className="flex justify-center w-full gap-2 mb-4">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
    </div>
  )
}