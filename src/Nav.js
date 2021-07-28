import React from 'react'
import { useState,useEffect } from 'react';
import "./Nav.css"
import logo from './logo.png';
import avatar from './download.png';
import {useHistory} from "react-router-dom";
function Nav() {
    const [show, handleshow] = useState(false);
    const history=useHistory()
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
            <img className="nav_logo" onClick={()=>history.push("/")}
            src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" 
            alt=""/>
            <img className="avatar" onClick={()=>history.push("/profile")}
             src={avatar} alt=""/>
         
            </div>
  
        </div>
    )
}

export default Nav
