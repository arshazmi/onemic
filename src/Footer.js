import React from 'react';
import './style.css';

import logo from "./images/footer-logo.png"
import google from "./images/google-play.png"
import apple from "./images/apple-store.png"

function Footer() {
    return (
      <div>
        
        <footer style={{ textAlign: "left" }} >
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-md-3"> <a href="#"> <img src={logo}/> </a>
              <div className="copy-right mt-2">
                <p>Copyright @ 2021. <a href="#">Storiyoh</a>. All rights reserved</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row clearfix">
                <div className="col-md-4">
                  <ul>
                    <li><a href="#">About Storiyoh OneMic</a></li>
                    <li><a href="#"> FAQ's </a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li><a href="#">Moderator Policy</a></li>
                    <li><a href="#">Help & Support</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h5>Download the app from</h5>
              <a href="#" className="mr-1"><img src={google}/></a> <a href="#"><img
                  src={apple}/></a>
            </div>
          </div>
        </div>
      </footer>   
        
      </div>
    );
  }
  
  export default Footer;