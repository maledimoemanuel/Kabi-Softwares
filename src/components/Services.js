import {Component} from 'react'
import {Container, Row,Col} from 'react-bootstrap'
import computerRepair from '../assets/img/computer-repair.webp'
import logoDesign from '../assets/img/logo-design.jpg'
import businessPlan from '../assets/img/business-plan.png'
import onlineApplication from '../assets/img/online-applications.jpg'
import print from '../assets/img/print-out.webp'
import softwareInstallation from '../assets/img/software-installation.jpg'
import webDevelopment from '../assets/img/web-development.jpg'
import Slider from "react-slick";


export const Services=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    const services=[
        {
            title:"Computer Repairs",
            description:'We have a highly skilled team of computer geeks who will solve any of your hardware problems',
            image: computerRepair
        },
        {
            title:"Logo Design",
            description:'We offer creative, modern logo design',
            image: logoDesign
        },
        {
            title:"Business plan",
            description:'We offer creative, modern logo design',
            image: businessPlan
        },
        {
            title:"Online Applications",
            description:'We offer creative, modern logo design',
            image: onlineApplication
        },
        {
            title:"Print Out And Copying",
            description:'We offer creative, modern logo design',
            image: print
        },
        {
            title:"Software Installation",
            description:'We offer creative, modern logo design',
            image: softwareInstallation
        },
        {
            title:"Web Development",
            description:'We offer creative, modern logo design',
            image: webDevelopment
        },
    ]

    return(
        <section className="shop" id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <h2><span className='tagline'>Our Services</span></h2>
                        <p></p>
                        <div style={{display:'flex', justifyContent: 'space-between'}}></div>
                     </Col>
                        <div className='card'>
                            <div>
                            {
                                services.map((services, index) => {
                                return (              
                                    <div style={{width:'18rem'}}>
                                        <div>
                                            <img src={services.image}/>
                                        </div>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{services.title}</h5>
                                        </div>
                                        <div>
                                            <p>{services.description}</p>
                                        </div>
                                        
                                    </div>
                                )
                                })
                            }
                            </div>
                        </div>
                </Row>
            </Container>
        </section>
    )
}