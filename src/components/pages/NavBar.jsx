import React, { useState } from "react";
import logo from '../../assets/images/logo.svg'
import hamburgermenu from '../../assets/images/icon-hamburger.svg'
import arrow from '../../assets/images/icon-arrow-down.svg'

export const NavBar = () => {

  const [open, setOpen] = useState(false);
  const ToggleMode = () => {
    setOpen(!open);
  }

  console.log(open)

  return (
    <div className="hero">
      <nav className="nav">

        <div className="logo">
          <img src={ logo } alt="" />
        </div>

        <div className="navbar">
          <ul className={open ? "ul-menu" : ""}>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li className="contact">Contact</li>
          <div className="triangle"></div>
          </ul>
        </div>
        <div className= {open ? "hamburger-menu" : "hamburger-menu" }onClick={ToggleMode}>
          <img src={ hamburgermenu } alt="" />
        </div>
      </nav>
      <div className="main">
        <span className="text">WE ARE CREATIVES</span>
        <img className="arrow" src={ arrow } alt="" />
      </div>
    </div>
  );
};


