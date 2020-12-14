import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import main_logo2 from "./logo-image/logo2.png";
import "./Navbar.css"


class Navbar extends Component {

    render() {

        return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color-nav" variant="light" style={{boxShadow: "none"}}>
          <div id="logo-href">
<a href={process.env.PUBLIC_URL + '/#/'} ><img src={main_logo2} id="logo-nav" alt="main-logo" /></a></div>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" className="navDropDown"/>
            
            
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" className="">

  <ReactBootStrap.Nav className="mr-auto" >

</ReactBootStrap.Nav>
    <ReactBootStrap.Nav className='nav-size' >

      <a href={process.env.PUBLIC_URL + '/#/'} className="nav-font" id="home">HOME</a>
      <a href={process.env.PUBLIC_URL + '/#/Program'} className="nav-font" id="faq" >PROGRAM</a>
      <a href={process.env.PUBLIC_URL + '/#/Gallery'} className="nav-font" id="info">GALLERY</a>
      <a href={process.env.PUBLIC_URL + '/#/Register'} className="nav-font" id="about" >REGISTRATION</a>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>

</ReactBootStrap.Navbar>

        )

    }
}

export default Navbar
