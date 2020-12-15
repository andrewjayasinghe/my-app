import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import instpic from "./../../assets/ins1.jpg"
import pictoo from "./../../assets/ins2.jpg"
import "./Register.css"


class Register extends Component {

    render() {
     
        return (

<div class="body">
      <div class="margins">
        <h1 class="title"><b>Let's Register!</b></h1>
      </div>
      
      <ol style={{textAlign:'left', marginLeft: '-20px'}}>
        <li class="font2"><div style={{textAlign:'left'}}>
            <p ><b>Click on the link below to obtain the form</b></p>
            <div style={{marginTop: '10px', marginBottom: '80px',marginLeft:'auto',marginRight:'auto'}}>
                <a class='regLink' href="https://docs.google.com/document/d/1fqL6pDRkXI5h0Pfj-cAlErkJ0vcHVu0LiSrCZllappI/edit?usp=sharing" target="_blank">Registration form Link</a> 
            </div>
        </div>
    
    </li>
        <li class="font2">
            <div style={{textAlign: 'justify'}}>
                <p ><b>You can Download the document, Click on the file section in the top right corner of your screen.</b></p>
                {/* <div style="margin-top: 20px;margin-bottom: 80px;margin-left:auto;margin-left: auto;"> */}
                <div style={{marginTop: '20px', marginBottom: '80px',marginLeft:'auto',marginRight:'auto'}}>
                    <img class="picture" src={instpic} alt="logo"/>
                </div>
            </div>

        </li>

        <li class="font2">
            <div style={{textAlign:'left'}}>
                <p ><b>Select Download and download the document in ".docx" microsoft word format to complete it.</b></p>
                {/* <div style="margin-top: 20px;margin-bottom: 80px;margin-left:auto;margin-left: auto;"> */}
                <div style={{marginTop: '20px', marginBottom: '80px',marginLeft:'auto',marginRight:'auto'}}>
                    <img class="picture1" src={pictoo} alt="logo"/>
                </div>
            
            </div>
            
        </li>

        <li  class="font2">         
            <div style={{textAlign:'left'}}>
                <p><b>Email the Completed Document to <i class='email'>headstartschildcare@yahoo.com</i></b></p>
                
            </div>
        </li>
      </ol>
</div>


        )
    };
};

export default Register