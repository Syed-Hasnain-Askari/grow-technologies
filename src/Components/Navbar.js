import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-scroll'

function Navbar() {

    // const mainMenu = document.querySelector(`.main__menu`);
    // const closeMenu = document.querySelector(".close__menu");
    // const clickMenu = document.querySelector(".click__menu");

    // clickMenu.addEventListener('click', show);
    // closeMenu.addEventListener('click', close);
    
    // function show() {
    //     mainMenu.style.display = 'flex';
    //     mainMenu.style.top = '0';
    // }

    // function close() {
    //     mainMenu.style.top = '-100%';
    // }


    const [open,setOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="logo"><span>PIXACT</span></div>
            <div className="click__menu" onClick={()=> setOpen(!open)}><MenuIcon/></div>
            <div className="main__menu" style={{ display: open ? "flex" : "block", top: open ? "0" : "-100%"}}>
                <span className="nav__items"><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></span>
                <span className="nav__items"><Link activeClass="active" to="IT" spy={true} smooth={true}>IT Consulting and Training</Link></span>
                <span className="nav__items"><Link activeClass="active" to="children" spy={true} smooth={true}>Children and Education</Link></span>
                <span className="nav__items"><Link activeClass="active" to="print" spy={true} smooth={true}>Print and Media</Link></span>
                <span className="nav__items"><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact Us</Link></span>
                <div  className="close__menu" onClick={()=> setOpen(false)}><CloseIcon/></div>
            </div>
        </div>
    )
}

export default Navbar