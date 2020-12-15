import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";
import "./Gallery.css"
import firstPicture from "./../../assets/im1.jpeg"
import secondPicture from "./../../assets/im2.jpeg"
import thirdPicture from "./../../assets/im3.jpeg"
import fourthPicture from "./../../assets/im4.jpeg"
import fifthPicture from "./../../assets/im5.jpeg"
import sixthPicture from "./../../assets/im6.jpeg"
import seventhPicture from "./../../assets/im7.jpeg"
import eighthPicture from "./../../assets/im9.jpeg"
import ninthPicture from "./../../assets/im10.jpeg"
import tenPicture from "./../../assets/im12.jpeg"
import elevenPicture from "./../../assets/im13.jpeg"
import twelvePicture from "./../../assets/im14.jpeg"
import thirteenPicture from "./../../assets/im15.jpeg"
import fourteenPicture from "./../../assets/im16.jpeg"
import onePicture from "./../../assets/i1.jpeg"









class Gallery extends Component {

    render() {
     
        return (

            <>
            <div className="cards3" >
             <h2 className="title" style={{marginBottom:'10px'}}><b>A Fun Learning Experience!</b></h2>


            <Carousel className="buttonAlign2" >
            <Carousel.Item interval={2000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={firstPicture}
                alt="First slide"
              />
               </div>
            </Carousel.Item>
            
            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer">
              <img
                className="carouselImage d-block w-100"
                src={secondPicture}
                alt="Third slide"

              />
              </div>

          
            </Carousel.Item>
            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={thirdPicture}
                alt="Third slide"
              />               
              </div>
            
            </Carousel.Item>

            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={fourthPicture}
                alt="Third slide"
              />               
              </div>
            
            </Carousel.Item>

            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={fifthPicture}
                alt="Third slide"
              />               
              </div>
            
            </Carousel.Item>

            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={sixthPicture}
                alt="Third slide"
              />               
              </div>
            
            </Carousel.Item>

            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={seventhPicture}
                alt="Third slide"
              />               
              </div>
            
            </Carousel.Item>

            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={eighthPicture}
                alt="Third slide"
              />               
              </div>
            
            </Carousel.Item>

            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={ninthPicture}
                alt="Third slide"
              />               
              </div>
            
            </Carousel.Item>

            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={tenPicture}
                alt="Third slide"
              />               
              </div>
            
            </Carousel.Item>

            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={elevenPicture}
                alt="Third slide"
              />               
              </div>
            
            </Carousel.Item>

            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={twelvePicture}
                alt="Third slide"
              />               
              </div>           
            </Carousel.Item>

            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={thirteenPicture}
                alt="Third slide"
              />               
              </div>
            
            </Carousel.Item>

            <Carousel.Item interval={1000}>
            <div className="carouseImageContainer" >
              <img
                className="carouselImage d-block w-100"
                src={fourteenPicture}
                alt="Third slide"
              />               
              </div>
            
            </Carousel.Item>


          </Carousel>
          </div>

 {/* #################### New Carousel######################### */}

 <div className="cards3" style={{marginTop:'30px'}}>

<h2 className="title"><b>Let's take a look inside!</b></h2>


<Carousel className="buttonAlign2" >
<Carousel.Item interval={2000}>
<div className="carouseImageContainer" >
 <img
   className="carouselImage d-block w-100"
   src={onePicture}
   alt="First slide"
 />
  </div>
</Carousel.Item>

</Carousel>
</div>

</>


        );
    }
}
export default Gallery