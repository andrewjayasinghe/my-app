import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Home.css"
import back from "./background.jpeg"


class Home extends Component {

    render() {
     
        return (
     
            <div className="body">


    <div>
      <img className='homepic' src={back} alt="logo" width="100%" />

    </div>


            <div className="cushion" style={{marginTop:"30px"}}>
            <h2 className="title"><b>OUR PHILOSOPHY</b></h2>
            <p className="content">Our philosophy is based on the notion that children need 
              due care for them to thrive and develop; Caring Relationships, 
              self-controlled and self-directed play time and exploring the 
              environment are key factors required for their growth. 
              We Strive to provide them the best care they need thereby 
              helping them achieve all their future endeavors.</p>
            </div>

            <div className="cushion">
            <h2 className="title"><b>MISSION STATEMENT</b></h2>
            <p className="content">To provide service through the concept of quality
            day care in order to meet the requirements of the present day,
            and to raise a next generation to face the future successfully.</p>
            </div>
            </div>
        )
    };
};

export default Home