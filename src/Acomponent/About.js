import React from "react";
import web1 from '../images/about_image.PNG'

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-md-auto col-sm-auto">
              <div className="row">
                <h1></h1>
                <div className="col-xl-12 col-md-auto col-sm-auto about_us">
                  <h1>Find Out More<span> About Us</span></h1>
                  <h3>Your Bussiness Concern Is Our First Priority</h3>  
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row">
                <div className="col-xl-6 col-md-auto about_header-img inner">
                   <img src={web1} className="img-fluid animated" alt="Home page" />
                </div>
                <div className="col-xl-6 col-md-auto col-sm-auto ">
                   <div className="container">
                     <div className="row">
                       <div className="col-12">
                         <h4>
                         Company Name Technologies aims to help Indian Business to enter the digital world and give it a new space to grow. We serve a customized IT Solutions to our clients as per their needs to their Business a new boost. We understand your business and create a road map to achieve the millstones that you had a dream of.
                         Company Name Technologies aims to help Indian Business to enter the digital world and give it a new space to grow. We serve a customized IT Solutions to our clients as per their needs to their Business a new boost. We understand your business and create a road map to achieve the millstones that you had a dream of.
                         Company Name Technologies aims to help Indian Business to enter the digital world and give it a new space to grow. We serve a customized IT Solutions to our clients as per their needs to their Business a new boost. We understand your business and create a road map to achieve the millstones that you had a dream of.
                         </h4>
                       </div>
                     </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
