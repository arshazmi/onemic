import React from 'react';
import './style.css';

import img1 from "./images/image-side1.jpg";
import img2 from "./images/image-side2.png";
import img3 from "./images/image-side3.png";
import img4 from "./images/image-side4.png";
import invite from "./images/invite-figimage.png";
import download from "./images/download-link.png";
import google from "./images/google-play.png";
import apple from "./images/apple-store.png";

function Rightsidebar() {
  return (
    <div style={{ textAlign: "left",position:"relative", zIndex:"-1" }}>
      {/* <!-- Right Sidebar --> */}
      {/* <div class="col-md-3"> */}
      <div class="row clearfix">
        {/* <!-- Top rated widget--> */}
        <div class="widget-section blue-bg col-md-12 pt-4">
          <section>
            <div class="section-header">
              <h2 class="sec-heading widgetheading float-left">Top Rated Topics</h2>
              <small class="float-right"> <a href="#">View all</a> </small> </div>
            <div class="topic-list">
              <ul class="list-unstyled">
                <li>
                  <div class="media mb-4"> <img class="mr-3 rounded-circle" src={img1} alt="Generic placeholder image" />
                    <div class="media-body mt-2">
                      <h6 class="mt-0 topic-title"><a href="#">What is your openion on commercial Ads</a></h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media mb-4"> <img class="mr-3 rounded-circle" src={img2} alt="Generic placeholder image" />
                    <div class="media-body mt-2">
                      <h6 class="mt-0 topic-title"><a href="#">Conflict in your aptitude &
                              qualification?</a></h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media mb-4"> <img class="mr-3 rounded-circle" src={img3} alt="Generic placeholder image" />
                    <div class="media-body mt-2">
                      <h6 class="mt-0 topic-title"><a href="#">Storiyoh | Core Purpose</a></h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media mb-4"> <img class="mr-3 rounded-circle" src={img4} alt="Generic placeholder image" />
                    <div class="media-body mt-2">
                      <h6 class="mt-0 topic-title"><a href="#">Little Storiyohs</a></h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media mb-4"> <img class="mr-3 rounded-circle" src={img2} alt="Generic placeholder image" />
                    <div class="media-body mt-2">
                      <h6 class="mt-0 topic-title"><a href="#">Thoughts on IoT</a></h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media mb-4"> <img class="mr-3 rounded-circle" src={img2} alt="Generic placeholder image" />
                    <div class="media-body mt-2">
                      <h6 class="mt-0 topic-title"><a href="#">Fundamentals of c progra-
                              mming-test</a></h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* <!--//-->  */}
        {/* <!----> */}
        <div class="widget-section">

          <figure class="figure">
            <img src={invite} class="figure-img img-fluid" />
            <figcaption class="figure-caption p-3 t-0">
              <h3 class="caption-heading2 font-white">Invite Your <b>Friends</b></h3>
              <a href="#" data-toggle="modal" data-target="#myModalsidebar" title="Invite Friend" class="btn invite-btn mt-2">CLICK HERE</a>

            </figcaption>
          </figure>
        </div>
        {/* <!--//-->   */}

        {/* <!----> */}
        <div class="widget-section">
          <div class="mobi-app mx-auto">
            <figure class="figure">
              <img src={download} class="figure-img img-fluid" />
              <figcaption class="figure-caption p-3">
                <h2 class="caption-heading">Download the app from</h2>
                <ul class="list-unstyled mt-4">
                  <li>
                    <a href="#" title="google-play"><img src={google} class="img-fluid" /></a>
                  </li>
                  <li>
                    <a href="#" title="apple-store"><img src={apple} class="img-fluid" /></a>
                  </li>
                </ul>
              </figcaption>
            </figure>

          </div>
        </div>
        {/* <!--//--> */}

      </div>
    </div>);
}
          {/* <!--//-->  */ }
        // </div>
    

export default Rightsidebar;