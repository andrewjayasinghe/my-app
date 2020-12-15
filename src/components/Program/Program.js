import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Program.css"


class Program extends Component {

    render() {
     
        return (
        
            <div className="body">
                   
            
                        <div className="cushion" style={{marginTop:"30px"}}>
                        <h2 className="title"><b>OUR PROGRAM</b></h2>
                        <p className="content">Head Starts Child Care Center offers a program 
                        for children aged 0 to 12 years. Our approach is a child centered one with an 
                        abundance of close supervision and attention. We focus towards the
                        motor, cognitive, social and emotional development of children through “Fun,
                        adaptive and Functional” learning programs.
                        This is achieved through both indoor and outdoor activities.</p>
                        </div>

                        <div className="cushion" style={{marginTop:"30px"}}>
                        <h2 className="title"  style={{marginBottom:"30px"}}><b>OUR GOALS</b></h2>
                        <h2 className="goal"><b><i>For Families</i></b></h2>

                        <div className="listpad">
                        <ul>
                            <li className="fam1">To act as an extension of 
                                their family unit in order to provide a loving and nurturing environment for the child.</li>
                            <li className="fam2">To take all the efforts to give access to 
                                available resources and information in the community to meet their family needs related to child care matters.</li>
                        </ul>  
                        </div>

                        <h2 className="goal"><b><i>For Children</i></b></h2>

                        <div className="listpad">
                        <ul>
                            <li className="fam3">To promote each child to develop as a healthy and 
                                adaptive individual with strong cognitive, 
                                motor, social, emotional and communication development.</li>
                            <li className="fam4">To create an environment 
                                which helps the child’s individual developmental needs and abilities.</li>
                        </ul>  
                        </div>

                        </div>
            </div>


        )
    };
};

export default Program