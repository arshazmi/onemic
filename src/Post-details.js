import React from 'react';
import './style.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Posts from './Posts.js';
import Rightsidebar from './Rightsidebar.js';


function Postdetails() {
    return (
        <div>
            <Header/>
            <div class="wrapper" style={{ textAlign: "left", marginTop:"57px",position:"relative", zIndex:"-1" }}>
                {/* <!-- Main --> */}
                <section class="main">
                    <div class="container-fluid">
                        <div class="row clearfix">
                            {/* <!-- section --> */}
                            
                            
                                <Posts/>
                               
                            
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

export default Postdetails;