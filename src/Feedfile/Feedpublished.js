import React from 'react';


// import saved from './images/saved.png';
import Feedresponse from './Feedresponse';
import Feedsaved from './Feedsaved';
// import Loading from './Loading';
import Feed from './Feed';

const Feedpublished = () =>{
    return(
        <div>
            <section>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    {/* <!-- Section Body --> */}
                        <div className="section-body mb-3">
                            <div className="article">
                                {/* <!-- Media --> */}
                                {/* Feed */}
                                <Feed/>
                                {/* Feed End */}

                                {/* <!--//--> */}
                                {/* <!-- Comments --> */}

                                <Feedresponse/>

                                {/* <!--//--> */}
                                
                            </div>
                        </div>
                    </div>

                    {/* Feed Saved  */}

                    <Feedsaved/>
            
                    {/* Feed Saved End */}
                </div>
                {/* <!--//--> */}

            </section>
            
        </div>
        // {/* <!--//--> */}
        // {/* <!-- Section Body --> */}
    );
}
export default Feedpublished;