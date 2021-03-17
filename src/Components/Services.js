import React from 'react'
import animation from '../images/animation3.gif';
import ScrollAnimation from 'react-animate-on-scroll';
import './services.css';

export default function Services() {
    return (
        <section id="services" className="services__wrapper">
            <ScrollAnimation animateIn='fadeIn'>
            <div className="row">
                <div className="col-md-6">
                    <img src={animation} alt="" className="img-fluid"/>
                </div>
                <div className="sevices_section col-md-6">
                   <div className="row d-flex justify-content-center mx-auto">
                        <div className="col-md-4 mt-5">
                         <h1 className="services text-center">Services.</h1>
                        </div>
                   </div>
                   <div className="row d-flex justify-content-center mx-auto">
                        <div className="col">
                         <p className="services-paragraph text-start text-center">
                            We offer customized digital services and scalable operational strategies to prepare your Organization ride through the waves of uncertainty in the form of disruptive technology and government regulations so you can deliver accelerated and cost-effective services for your consumers
                         </p>
                        </div>
                   </div>
                   <div className="row d-flex justify-content-center justify-content-sm-center">
                        <p className="explore-services mt-5">Explore services</p>
                   </div>
                   <div className="row">
                        <div className="border-line"></div>
                        </div>
                </div>
                
            </div>
            </ScrollAnimation>
        </section>
    )
}
