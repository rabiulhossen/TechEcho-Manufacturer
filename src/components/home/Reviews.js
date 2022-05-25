import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Review from './Review';

export default function Reviews() {
     const [testimonial,setTestimonial] =useState([]);


     useEffect(() => {
       fetch("http://localhost:5000/reviews")
       .then(res => res.json())
       .then(data => setTestimonial(data))
     
     }, [])
     
     const navigate =useNavigate();
     const partsPurshase =(id) =>{
          navigate("/")
     }
  return(
     <section className='mb-24 mt-20'>
           <div>
             <h4 className="text-4xl text-zinc-900 pb-3 font-bold font-serif text-center"> Our Testimonials</h4>
             <h2 className='text-3xl font-serif font-medium text-white mb-2'>What our Consumer say?</h2>
         </div>
     <div className='flex justify-between'>
        
         <div>
             <img src="" className="w-24 lg:w-48" alt="" />
         </div>
     </div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
         {
             testimonial.map(review =><Review
                 key={review._id}
                 review={review}
             ></Review>)
         }
     </div>
 </section>
  )
}
