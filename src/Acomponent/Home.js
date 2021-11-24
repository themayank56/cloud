import React from "react";
import web0 from '../images/home_image.jpg'
import web1 from '../images/rimg-1.PNG'
import web2 from '../images/rimg-2.PNG'
import web3 from '../images/rimg-33.PNG'
import web7 from '../images/bil.jpg'
import web8 from '../images/stev.jpg'

const Home = () => {
  return (
    <>
        <div className="container-fluid" >
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-xl-6 col-md-auto col-sm-auto ">
                  <h3 className="welcome">Welcome to</h3>
                  <h1 className="head1 section-head">Website_name</h1>
                  <h3 className="head2">We design a road map towards the success of your Businessin this Digital World </h3>
                </div>
                  <div className="col-xl-6 col-md-auto home_header_img inner" id="nav_bg">
                  <img src={web0} className="img-fluid animated" alt="Home page" />
                  </div>
              </div>
            </div>
          </div>
        </div>
           
        <div className="container section">
          <div className="section-head">
            <h1 className="select_project">Select Project</h1>
          </div>
          <div className="row" id="project_name">
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div className="card card-margin">
                <div className="inner">
                  <img src={web1} class="card-img-top" alt="Img 1" />
                </div>
                <div className="card-body section-head">
                  <h1 className="card-title">Dorsia</h1>
                  <a  className="nav-link" href="#">Product, Marketing</a>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-sm-12">
              <div className="card card-margin">
                <div className="inner">
                  <img src={web2} class="card-img-top" alt="Img 1" />
                </div>
                  <div className="card-body section-head">
                    <h1 className="card-title">News </h1>
                    <a  className="nav-link" href="#">Branding, Product</a>
                  </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-sm-12">
              <div className="card card-margin">
                <div className="inner">
                  <img src={web3} class="card-img-top" alt="Img 1" />
                </div>
                  <div className="card-body section-head">
                    <h1 className="card-title">Zero</h1>
                    <a  className="nav-link" href="#">Marketing, product</a>
                  </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-sm-12">
              <div className="card card-margin">
                <div className="inner">
                  <img src={web2} class="card-img-top" alt="Img 1" />
                </div>
                  <div className="card-body section-head">
                    <h1 className="card-title">News</h1>
                    <a  className="nav-link" href="#">Branding, Product</a>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div id="testimonial" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <div className="testimoni">
                <h1> Testimonial</h1>
              </div>
              </div>
              <div className="col-md-6"> 
                <div className="testimonial">
                  <p className="textt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, sint?</p>
                    <div className="found">
                      <img src={web7} alt="" />
                    </div>
                  <div className="text1">Bill gate</div>
                  <div className="text1">Microsoft</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial">
                  <p className="textt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, sint?</p>
                    <div className="found">
                      <img src={web8} alt="" />
                    </div>
                  <div className="text1">Steve Jobs</div>
                  <div className="text1">Apple</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;