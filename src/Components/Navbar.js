import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-scroll'

function Navbar() {

    const [open,setOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="logo"><span>PIXACT</span></div>
            <div className="click__menu" onClick={()=> setOpen(!open)}><MenuIcon/></div>
            <div className="main__menu" style={{ display: open ? "flex" : "block", top: open ? "0" : "-100%"}}>
                <span className="nav__items"><Link activeClass="active" to="home" spy={true} smooth={true}>About Us</Link></span>
                <span className="nav__items"><Link activeClass="active" to="IT" spy={true} smooth={true}>Clients</Link></span>
                <span className="nav__items"><Link activeClass="active" to="education" spy={true} smooth={true}>Services</Link></span>
                <span className="nav__items"><Link activeClass="active" to="testimonial" spy={true} smooth={true}>Testimonial</Link></span>
                <span className="nav__items"><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact Us</Link></span>
                <div  className="close__menu" onClick={()=> setOpen(false)}><CloseIcon/></div>
            </div>
        </div>
    )
}

export default Navbar