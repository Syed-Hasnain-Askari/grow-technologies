import React from "react";
import "./Testimonal.css";
import image1 from "../images/testimonial3.jpg";
import image2 from "../images/testimonial4.png";
import image3 from "../images/testimonial1.png";
export default function Testimonals() {
  return (
    <div>
      <div className="slider__container">
        <div className="slider">
          <input
            type="radio"
            name="slider"
            title="slide1"
            checked="checked"
            className="slider__nav"
          />
          <input
            type="radio"
            name="slider"
            title="slide2"
            checked="checked"
            className="slider__nav"
          />
          <div className="slider__inner">
            <div className="slider__contents">
              <section>
                <img
                  className="rounded-circle slider__image"
                  src={image1}
                ></img>
              </section>
              <h2 className="slider__caption">Steven Ayokee</h2>
              <p className="slider__txt">
                I am amazed at how quick are the first results, all of which I
                sincerely attribute to my newly found love for these fitness
                workouts! I lost some weight and I feel amazing!
              </p>
            </div>

            <div className="slider__contents">
              <section>
                <img className="rounded-circle slider-image" src={image2}></img>
              </section>
              <h2 className="slider__caption">Dominic Snyder</h2>
              <p className="slider__txt">
                am amazed at how quick are the first results, all of which I
                sincerely attribute to my newly found love for these fitness
                workouts! I lost some weight and I feel amazing!
              </p>
            </div>
            <div className="slider__contents">
              <section>
                <img
                  className="rounded-circle slider__image"
                  src={image1}
                ></img>
              </section>
              <h2 className="slider__caption">Steven Ayokee</h2>
              <p className="slider__txt">
                I am amazed at how quick are the first results, all of which I
                sincerely attribute to my newly found love for these fitness
                workouts! I lost some weight and I feel amazing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
