import React from 'react';
import "./Header.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

const Header = () => {
    const [show, handleShow] = useState(false);
    const history = useHistory();
  
    const transitionNavBar = () => {
      if (window.scrollY > 100 ) {
        handleShow(true);
      } else{
          handleShow(false)
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
    
      return () => window.removeEventListener("scroll", transitionNavBar)
    }, []);
    

    
  return (
    <div className='header'>
        <div className="headerSec1">
            <span className='jobs'>Now Hiring  :  
Looking for a job in Full Stack Development?</span>

<span>
    <span className='phone'>+91 487 2080 212</span>
    <span className='location'>Leshore Business Park, Thrissur</span>
</span>
        </div>
        <div className="headerSec2">
            <div className="logo">
                <img className='logoPng' src='https://woxro.com/public/assets/png/woxrologo.png' alt=''/>
            </div>
            <div className="menu">MENU BAR</div>
            
        </div>
        <div className={`headerSec3 ${show && "nav_black"}`}>
        <span className='navLink'>Home</span>
            <span className='navLink'>About Us</span>
            <span className='navLink'>Services</span>
            <span className='navLink'>Technology</span>
            <span className='navLink'>Careers</span>
            <span className='navLink'>Blogs</span>
            <span className='navLink'>Our Works</span>
            <span className='navLink'>Contact us</span>
        </div>

        <div className="headerSec5">
        <span className='navLink'>Home</span>
            <span className='navLink'>About Us</span>
            <span className='navLink'>Services</span>
            <span className='navLink'>Technology</span>
            <span className='navLink'>Careers</span>
            <span className='navLink'>Blogs</span>
            <span className='navLink'>Our Works</span>
            <span className='navLink'>Contact us</span>
        </div>
        <div className="headerSec4">
            <img className='headerImg' src='https://images.pexels.com/photos/3752402/pexels-photo-3752402.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
            <div className="bannerData">
                <span className='bannerMain'>Kerala's Leading Web
Design Company</span>
<span className="bannerDesc">Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce & Mobile App Development Services.</span>
            </div>
        </div>
    </div>
  )
}

export default Header