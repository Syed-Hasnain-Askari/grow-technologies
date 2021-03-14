import React from 'react';
import './Contact.css';
import ScrollAnimation from 'react-animate-on-scroll';
export default function Contact() {
    return (
        <section id="contact" className="contact" id="contact">
        <ScrollAnimation animateIn="fadeIn">
        <div className="container">
          <div className="heading text-center wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
            <h2>
              <span>Keep In</span>
              Touch</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eligendi
              <br />
              saepe deleniti sequi sint quaerat.</p>
          </div>
          <div className="main wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
            <div className="row">
              <div className="col-lg-8 left">
                <h3>Send Message</h3>
                <form onSubmit>
                  <div className="row">
                    <div className="col-sm-6">
                      <input type="text" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="col-sm-6">
                      <input type="email" className="form-control" placeholder="Email" required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" rows={5} id="comment" placeholder="Message" defaultValue={""} required/>
                  </div>
                  <button className="btn btn-block" type="submit">Send Now!</button>
                </form>
              </div>
              {/* Left */}
              <div className="col-lg-4">
                <div className="right">
                  <h4>Contact Information</h4>
                  <div className="info d-flex align-items-center">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>c - 165, Your Street Jaipur, <br />IN 91 554</span>
                  </div>
                  <div className="info d-flex align-items-center">
                    <i className="fa fa-chrome" aria-hidden="true" />
                    <span>+1-456-456-7890
                    </span>
                  </div>
                  <div className="info d-flex align-items-center">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>info@yourdomain.com
                    </span>
                  </div>
                  <div className="social">
                    <a href="#0">
                      <i className="fa fa-dribbble" aria-hidden="true" />
                    </a>
                    <a href="#0">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="#0">
                      <i className="fa fa-github" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </section>
    )
}
