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
<button className='btn btn-primary mx-5'>
    <Link to="www.facebook.com"> project one</Link>
</button>
<button className='btn btn-secondary'>
     <Link to="/home">project two</Link>
</button>
<button className='btn btn-primary ml-5'>
     <Link to="/about">project three </Link>
</button>

                        </Col>
                        
                        <Col style={{background:'#1840428c'}} className='aboutMsg m-auto m-md-0 p-5' xs={10} sm={8} md={6}>
                            <h2 className='mt-4'>About Me</h2>
                            <p className='mt-4'>I am a Web developer. I build websites and web applications. I am comfortable with JavaScript. I also have experience working with Reactjs and Node js. I care about writing clean code. I am always dedicated and hardworking. I am always interested in learning new technology. </p>
                            <div className='d-flex align-items-center pt-4'>
                                <h5 className='p-0 pr-2 m-0'>Name: </h5>
                                <p className='p-0 m-0'> Rabiul Hoosen</p>
                            </div>
                            
                            <div className='d-flex align-items-center pt-4'>
                                <h5 className='p-0 pr-2 m-0'>Address: </h5>
                                <p className='p-0 m-0'> Rangunia,Chittagong,Bangladesh</p>
                            </div>
                            <div className='d-flex align-items-center pt-4'>
                                <h5 className='p-0 pr-2 m-0'>Email: </h5>
                                <p className='p-0 m-0'> rhsimon69@gmail.com</p>
                            </div>
                            <div className='d-flex align-items-center pt-4 pb-4'>
                                <h5 className='p-0 pr-2 m-0'>Phone: </h5>
                                <p className='p-0 m-0'> +8801883455693</p>
                            </div>
                            </Col>
                            </Row>
                         
                            </div>
                            </div>

    </div>
  )
}
