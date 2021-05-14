import React from 'react';
import './style.css';

import p1 from "./images/author1.jpg";

import p5 from "./images/icon-like.png";
import p6 from "./images/icon-dislike.png";
import p7 from "./images/icon-comment.png";
import p8 from "./images/icon-forward.png";
import p9 from "./images/icon-pin.png";
import p0 from "./images/icon-flag.png";


function Body1() {
    return (
        <div>
            <div class="section-body mb-3">
                <div class="article">
                    {/* <!-- Media --> */}
                    <div class="media p-3"> <img src={p1}alt="" class="mr-3 rounded-circle" style={{width:"86px"}} />
                        <div class="media-body">
                            <div class="article-title">
                                <h5 >I Totally agree</h5>
                            </div>
                            <div class="article-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a class="font-pink" href="#"><small><u>more...</u></small></a></p>
                                    <p class="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
                                    {/* <!----> */}
                                    <div class="tags mb-4">
                                        <a href="#" class="btn btn-tags selected mr-1"> #COLLEGE </a>
                                        <a href="#" class="btn btn-tags mr-1"> #EDUCATION </a>
                                        <a href="#" class="btn btn-tags mr-1"> #SCHOOL </a>
                                    </div>
                                    {/* <!--//-->  */}
                                   
                            </div>
                            </div>
                        </div>
                        {/* <!--//-->  */}
                        {/* <!-- Comments --> */}
                        <div class="comment p-3 mt-2 mb-3">
                            <ul class="list-unstyled coments-use">
                                <li> <a href="#" class="comment"><img src={p5} /></a> <span class="total">1 K</span> </li>
                                <li> <a href="#" class="comment"><img src={p6} /></a> <span class="total">15</span> </li>
                                <li> <a href="#"> <img src={p7} />  </a> <span class="total">32</span> </li>
                                <li> <a href="#" class="comment"><img src={p8} /></a> <span class="total">20</span> </li>
                                <li> <a href="#" class="comment"><img src={p9} /></a> <span class="total">08</span> </li>
                                <li class="border-none" data-toggle="modal" data-target="#myflag1"> 
                                <a href="#" class="comment"><img src={p0} /></a> <span class="total">01</span> </li>
                            </ul>
                        </div>
                        {/* <!--//-->  */}
                    </div>
                </div>
            </div>

    );
}

export default Body1;