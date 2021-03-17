import React from 'react';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';

// components
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Services from './Components/Services'
import Contact from './Components/Contact';
import Footer from './Components/Footer';


// import images
import animation from './images/animation2.gif'
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScrollAnimation animateIn='bounceInRight'>
      <Banner
        caption="Childcare and Education"
        details="We are a leader in digital content 
        development and delivery for Primary, Secondary and non 
        Academic training programs"
        image={animation}
        id="IT"
      />
      </ScrollAnimation >
      <ScrollAnimation animateIn='bounceInLeft'>
      <Banner
        caption="Childcare and Education"
        details="We are a leader in digital content 
        development and delivery for Primary, Secondary and non 
        Academic training programs"
        image={pic2}
        cName="reverse__row"
        id="print"
      />
      </ScrollAnimation>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;