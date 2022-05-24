import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './AboutMe.css';

export default function Aboutme() {
  return (
    <div className='mb-5' style={{background:'#184042',position:'relative',overflow:'hidden'}}>



            <div style={{width:'100%',color:'white'}}>
                <div className='container mb-5'>
                    <Row>
                        <Col className='aboutImg p-4 m-auto m-md-0' xs={10} sm={8} md={6}>
                            <img style={{width:'100%',border:'3px solid #184042'}} src="https://i.ibb.co/fkj29Yp/edit.jpg" alt="my about"/>
                        </Col>
                        <Col>
                        <h1 className='text-bold font-sans text-4xl mt-5'>Project Information</h1>
<div className='my-7 pt-6 pb-3'>
<button className='btn btn-wide bg-primary text-black mx-auto px-4'>
    <a href='https://rabiulhossen.github.io/demo-ecommerce/#home'>Demo Ecommerce</a>
    
</button>
<h4>This is a demo e-commerce website without javasript functionality.It is create with Html and Css.</h4>
</div>
<div>
<button className='btn btn-wide mx-auto bg-primary text-black px-4'>
    <a href='https://condescending-noether-fd783b.netlify.app/'>Calculation</a>
   
</button>
<p>This is a normal income-expense calculation site.you can easily calculate your monthly savings.This site technology bring to play html,css & javascript</p>
</div>
<div className='my-9'>
<button className='btn btn-wide mx-auto bg-primary text-black px-4'>
    <a href='https://apple-nationwide-distributor.web.app/'>SERVICE MANAGE</a>
   
</button>
<p>This is a demo Warehouse management website.its a primary Mern stack project.you can comportable with this functionality which is created with html css bootstrap javascript and ReactJs with many functionalities.</p>
</div>


<div>
<h3 className='text-bold text-3xl mb-4'>My Skill</h3>

<h4 className='text-bold text-xl text-primary'><span className='text-bold text-2xl'>Expert : </span>HTML5,CSS3,Bootstrap</h4>
<h4 className='text-bold text-xl text-primary'><span className='text-bold text-2xl'>Intermediate : </span>Javascript,TailwindCss,ReactJs & Git</h4>
<h4 className='text-bold text-xl text-primary'><span className='text-bold text-2xl'>Familiar : </span>Nodejs,Mongodb,Heruko</h4>
<h4 className='text-bold text-xl text-primary'><span className='text-bold text-2xl'>Tools : </span>Vs code,Netlify,Github</h4>

</div>
<div>
    <h1 className='text-3xl text-bold mb-3 mt-7'>Education</h1>
    <h2 className='text-bold text-xl text-primary'>I have completed my HSC examination in 2019.Now I am Studing at University of creative Technology.</h2>
</div>

                        </Col>
                        
                        <Col style={{background:'#1840428c'}} className='aboutMsg m-auto m-md-0 p-5' xs={10} sm={8} md={6}>
                            <h2 className='mt-4 text-3xl'>About Me</h2>
                            <p className='mt-4 text-xl'>I am a Web developer. I build websites and web applications. I am comfortable with JavaScript. I also have experience working with Reactjs and Node js. I care about writing clean code. I am always dedicated and hardworking. I am always interested in learning new technology. </p>
                            <div className='d-flex align-items-center pt-4'>
                                <h5 className='p-0 pr-2 m-0 text-2xl'>Name: <span>Rabiul Hoosen</span> </h5>
                              
                            </div>
                            <div className='d-flex align-items-center pt-2 pb-2'>
                                <h5 className='p-0 pr-2 m-0 text-2xl'>Phone : <span className='text-xl'>+8801883455693 </span> </h5>
                               
                            </div>
                           
                            <div className='d-flex align-items-center pb-1'>
                                <h5 className='p-0 pr-2 m-0 text-2xl'>Email: <span>rhsimon69@gmail.com</span> </h5>
                              
                            </div>
                           
                            <div className='d-flex align-items-center pt-0'>
                                <h5 className='p-0 pr-2 m-0 text-2xl'>Address: <span className='text-xl'>Rangunia,Chittagong,Bangladesh</span> </h5>
                               
                            </div>
                            </Col>
                            </Row>
                         
                            </div>
                            </div>

    </div>
  )
}
