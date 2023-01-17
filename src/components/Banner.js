/*import {useEffect, useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/header-img.svg';
//import image from '../assets/img/download.jpg'
export const Banner =()=>{

    return(
        <section className="banner" id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <h2><span className='tagline'>Kabi Softwares</span></h2>
                        <p className='motto'>"Diminish Digital Divide"</p>
                        <h3><span className="wrap"></span></h3>
                        <p>Welcome to Kabi Softwares, where we offer a wide range of computer-related services to meet all of your needs. Whether you're in need of a quick computer repair, a new software installation, custom web development, or a professional logo design, we've got you covered. Our team of experienced technicians and designers are dedicated to providing excellent service and high-quality work. We understand the importance of keeping your technology running smoothly, and we work diligently to get your devices up and running as soon as possible. We also pride ourselves on creating visually stunning and effective designs that will help take your business to the next level. Trust us to handle all of your technology needs, and experience the difference that comes from working with a dedicated professional team.</p>
                        <div style={{display:'flex', justifyContent: 'space-between'}}></div>
                        </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                        
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}*/

import React from 'react';


const Banner = () => {
  return (
    <div className="header-wrapper">
      <div className='main-info'>
        <h1>Kabi Softwares</h1>
        <p>Diminish Digital Divide</p>
      </div>
      <div className='description'>
          <p>Welcome to Kabi Softwares, where we offer a wide range of computer-related services to meet all of your needs. Whether you're in need of a quick computer repair, a new software installation, custom web development, or a professional logo design, we've got you covered. Our team of experienced technicians and designers are dedicated to providing excellent service and high-quality work. We understand the importance of keeping your technology running smoothly, and we work diligently to get your devices up and running as soon as possible. We also pride ourselves on creating visually stunning and effective designs that will help take your business to the next level. Trust us to handle all of your technology needs, and experience the difference that comes from working with a dedicated professional team.</p>
      </div>
      <div className='contact'>
        <a href='/contact' className='btn-main-offer'>Contact Us</a>
      </div>
    </div>
  )
}

export default Banner
