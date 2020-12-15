import React, { Component } from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import "mdbreact/dist/css/mdb.css";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            
            <footer class="page-footer font-small unique-color-dark pt-4 bottom" style={{backgroundColor:"#e2fab6"}}>
< link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
  <div class="container">

        <div  class="footer-copyright text-center py-1">
        <a href={process.env.PUBLIC_URL + '/#/'} className="foot-font" id="home">HOME |</a>
      <a href={process.env.PUBLIC_URL + '/#/Program'} className="foot-font" id="faq" > PROGRAM |</a>
      <a href={process.env.PUBLIC_URL + '/#/Gallery'} className="foot-font" id="info"> GALLERY |</a>
      <a href={process.env.PUBLIC_URL + '/#/Register'} className="foot-font" id="about" > REGISTRATION</a>
        </div>
    <div  class="footer-copyright text-center py-2" >
        <a class="btn-floating btn-fb mx-1" href="https://www.facebook.com/Head-Starts-Child-Care-Center-1980248928893533/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-facebook fa-3x"> </i>
        </a>
      </div>
    



  <div class="footer-copyright text-center py-3" id="copy">© 2020 Copyright:
    <i id="copy"> Head Starts Child Care. All rights reserved</i><br></br>
    <i>headstartschildcare@yahoo.com</i>
  </div>
  </div>

</footer>
        );
    }
}

export default Footer;