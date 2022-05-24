import React from 'react';
import './Global.css';
import amazon from '../../resources/img/Amazon.svg';
import daraz from '../../resources/img/Daraz.pk Logo.svg';
import ebay from '../../resources/img/Ebay.svg';
import walmart from '../../resources/img/Walmart.svg';
import alibaba from '../../resources/img/Alibaba.svg';
import rakuten from '../../resources/img/Rakuten.svg';

export default function Global() {
  return (
    <div>
<h1 className='text-4xl font-bold font-serif mx-auto my-5'>Our Global Partners</h1>
<div className='global-container'>


     <div className="">
          <img src={amazon} alt="" /> 
          <p className='font-semiBold font-serif text-xl text-left text-zinc-900'>Largest E-commerce Site</p>
     </div>
     <div className="">
          <img src={alibaba} alt="" />
          <p className='font-semiBold font-serif text-xl text-left text-zinc-900'>Best Whole Seller</p>
     </div>
     <div className="">
          <img src={ebay} alt="" />
          <p className='font-semiBold font-serif text-xl text-left text-zinc-900'>Richful E-commerce Site</p>
     </div>
     <div className="">
          <img src={daraz} alt="" />
          <p className='font-semiBold font-serif text-xl text-left text-zinc-900'>Best Retail Seller</p>
     </div>
     <div className="">
          <img src={walmart} alt="" />
          <p className='font-semiBold font-serif text-xl text-left text-zinc-900'>Best</p>
     </div>
     <div className="">
          <img src={rakuten} alt="" />
          <p className='font-semiBold font-serif text-xl text-left text-zinc-900'>Super Sports Sponsor</p>
     </div>
</div>





    </div>
  )
}
