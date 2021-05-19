// import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Leftsidebar from './Leftsidebar';
//import Body from './Postcard';
import Postcard from './Postcard';
// import Pincard from './Pincard';
import './Leftsidebar.css';
import Header from './Header.js';
function Postpage() {
    return (
        <div>
            {/* HEADER PART */}
            <Header />
            {/* Header End */}


            <div class="wrapper" style={{ textAlign: "left", marginTop: "57px", position: "relative", zIndex: "-1" }}>
                <div id="content">
                    <section className="main">
                        <div className="container-fluid">
                            <div className="row clearfix">

                                {/* Left Sidebar */}
                                <Leftsidebar />
                                {/* Left Sidebar End */}

                                {/* Postcard */}
                                <Postcard />
                                {/* Postcard End */}

                            </div>
                        </div>
                    </section>

                    {/* FOOTER PART */}
                    <Footer />
                    {/* Footer End */}

                </div>
            </div>
        </div>




    );
}

export default Postpage;