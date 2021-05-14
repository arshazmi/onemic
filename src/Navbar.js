import React from 'react';
import './style.css';

import collapsebtn from "./images/collapse-btn.png";
import logo from "./images/logo.png";
import searchbtn from "./images/search-btn.png";
import dropdowncross from "./images/dropdown-cross-btn.png";
import alerticon  from"./images/alert-icon.png";
import userimage from "./images/user-image.png";
import faq from "./images/faq.png";
import help from "./images/icon--help.png" ;
import setting from "./images/icon-setting.png";
import logout from "./images/icon-logout.png";


const Navbar = () => {
  return (
    <div>

     <header style={{position:"fixed", top:"0", width:"100%", }}>
        <nav class="navbar navbar-expand-lg navbar-light" style={{background: "#ffffff"}}>
          <div class="container-fluid">
          <a id="sidebarCollapse"> <img src={collapsebtn} alt="" class="mr-4"/></a>
            <a href="/"> <img src={logo} alt=""/> </a>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="form-inline my-2 my-lg-0 ml-auto search-form">
                <input class="form-control mr-sm-2 ml-auto" type="search" placeholder="Search" aria-label="Search..."/>
                <button class="search-btn my-2 my-sm-0" type="submit"> <img src={searchbtn} alt=""/>
                </button>
              </form>
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active dropdown"> <a class="nav-link dropdown-toggle bg-skyblue2" href="#"
                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                    <img src={dropdowncross} alt=""/> </a>
                  {/* <!-- Create Dropdown --> */}
                  <div class="dropdown-menu createdropdown" aria-labelledby="dropdownMenuLink">
                    <ul class="list-unstyled create-list">
                      <li>
                        <h4><b>Create</b></h4>
                      </li>
                      <li class="pt-3">
                        <h5 data-toggle="modal" data-target="#createTopic">Topic</h5>
                        <p>Create a topic of interest</p>
                      </li>
                      <li>
                        <h5 data-toggle="modal" data-target="#createPost">Post</h5>
                        <p>Share a post on your OneMic feed</p>
                      </li>
                    </ul>
                  </div>
                  {/* <!--//--> */}

                </li>
                <li class="nav-item active"> <a class="nav-link" href="#"><img src={alerticon} alt=""/></a>
                </li>
                {/* <!-- User --> */}
                <li class="nav-item border-none dropdown"> <a class="nav-link dropdown-toggle" href="#"
                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                    href="#"><img src={userimage} alt=""/></a>&nbsp;&nbsp;
                  {/* <!-- User Dropdown --> */}
                  <div class="dropdown-menu userdropdown" aria-labelledby="dropdownMenuLink">

                    <h5><img src="images/icon-user.png"/> &nbsp;&nbsp;My Station</h5>
                    <ul class="list-unstyled">
                      <li><a href="#"><img src={faq} alt=""/>&nbsp;&nbsp;FAQ'S </a></li>
                      <li><a href="#"><img src={help}alt=""/>&nbsp;&nbsp;Help & Support </a></li>
                      <li><a href="#"><img src={setting} alt=""/>&nbsp;&nbsp;User Setting </a></li>
                      <li><a href="#"><img src={logout} alt=""/>&nbsp;&nbsp;Logout </a></li>
                    </ul>

                  </div>
                  {/* <!--//--> */}
                </li>
                <li class="nav-item "> <a class="prm-btn btn nav-item mt-2 btn-round">UPGRADE</a> </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    </div>
   
  );
}

export default Navbar;