import React from 'react'
import { useState,useEffect } from 'react';
import "./Nav.css"
import logo from './logo.png';
import avatar from './download.png';
function Nav() {
    const [show, handleshow] = useState(false);
const transitionNavbar=()=>{
if (window.scrollY > 100) {
    handleshow(true)
}else{
    handleshow(false)
}
}
useEffect(() => {
   window.addEventListener("scroll",transitionNavbar);
   return()=>window.removeEventListener("scroll",transitionNavbar);
}, [])
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
            <img className="nav_logo"
            src={logo} 
            alt=""/>
            <img className="avatar"
             src={avatar} alt=""/>
         
            </div>
  
        </div>
    )
}

export default Nav
