import React from 'react'
import './Banner.css'
function Banner( {caption, details, cName,image,id} ) {
    return(
        <div id={id} className={`banner ${cName}`}>
            <div className="anime">
                <img className="anime__pic" src={image} alt="..." />
            </div>
            
            <div className="slider__container">
                <div className="slider">
                    <input type="radio" name="slider" title="slide1" checked="checked" className="slider__nav" />
                    <input type="radio" name="slider" title="slide2" checked="checked" className="slider__nav" />
                    <div className="slider__inner">
                        <div className="slider__contents">
                            <h2 className="slider__caption"> {caption} </h2>
                            <p className="slider__txt"> {details} </p>
                        </div>
                        <div className="slider__contents">
                            <h2 className="slider__caption"> {caption} </h2>
                            <p className="slider__txt"> {details} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner