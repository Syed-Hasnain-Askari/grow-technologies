import React from 'react'
import './Testimonal.css';
import testimonial1 from '../images/testimonial3.jpg'


// avatar images
import avatar1 from '../images/avatar.jpg'

function Testimonial() {
    return (
        <div id="testimonial" className="testimonials">
            <div className="inner">
                <h1>Testimonials</h1>
                <div className="border"></div>

                <div className="row">
                    <div className="col">
                        <div className="inside__col">
                            <img src={testimonial1} className="avatar__images" />
                            <div className="name">Full Name</div>
                            <p>lorem ipsum volvo comisto  dadada to be hoinest and bja sjv djn j rerweers</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="inside__col">
                            <img src={testimonial1} className="avatar__images"/>
                            <div className="name">Full Name</div>
                            <p>lorem ipsum volvo comisto  dadada to be hoinest and bja sjv djn j rerweers</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="inside__col">
                            <img src={testimonial1} className="avatar__images"/>
                            <div className="name">Full Name</div>
                            <p>lorem ipsum volvo comisto  dadada to be hoinest and bja sjv djn j rerweers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
