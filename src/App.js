import logo from './logo.svg';
import './App.css';

// components
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// import images
import animation from './images/animation2.gif'
import pic1 from './images/pic1.jpg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner
        caption="Childcare and Education"
        details="We are a leader in digital content 
        development and delivery for Primary, Secondary and non 
        Academic training programs"
        image={animation}
        id="IT"
      />
      <Banner
        caption="Childcare and Education"
        details="We are a leader in digital content 
        development and delivery for Primary, Secondary and non 
        Academic training programs"
        image={pic1}
        cName="reverse__row"
        id="print"
      />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;