import React from 'react';
import './style.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Bodyhead from './Bodyhead.js';
import Body from './Body.js';
import Body1 from './Body1.js';
import Body2 from './Body2.js';
import Rightsidebar from './Rightsidebar.js';


function Topic() {
    return (
        <div>
            <Navbar/>
            <div class="wrapper" style={{ textAlign: "left", marginTop:"57px",position:"relative", zIndex:"-1" }}>
                {/* <!-- Main --> */}
                <section class="main">
                    <div class="container-fluid">
                        <div class="row clearfix">
                            {/* <!-- section --> */}
                            <div class="col-md-9 pt-5">
                            
                                <Bodyhead />
                                <Body />
                                <Body2/>
                                <Body1 />
                                <Body />
                                <Body2/>
                               
                            </div>
                            {/* <!-- // --> */}
                            {/* <!-- Right Sidebar --> */}
                            <div class="col-md-3">
                                <Rightsidebar />
                            </div>

                            {/* <!-- // --> */}
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    );
}

export default Topic;