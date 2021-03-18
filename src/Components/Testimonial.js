import React from 'react'
import './Testimonial.css'


// avatar images
import avatar1 from '../images/avatar.jpg'

function Testimonial() {
    return (
        <div className="testimonials">
            <div className="inner">
                <h1>Testimonials</h1>
                <div className="border"></div>

                <div className="row">
                    <div className="col">
                        <div className="inside__col">
                            <img src={avatar1} className="avatar__images" />
                            <div className="name">Full Name</div>
                            <p>lorem ipsum volvo comisto  dadada to be hoinest and bja sjv djn j rerweers</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="inside__col">
                            <img src={avatar1} className="avatar__images"/>
                            <div className="name">Full Name</div>
                            <p>lorem ipsum volvo comisto  dadada to be hoinest and bja sjv djn j rerweers</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="inside__col">
                            <img src={avatar1} className="avatar__images"/>
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
