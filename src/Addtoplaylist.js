import React from 'react'

const Addtoplaylist = () => {
    return (
        <>
            
                {/* <!-- Add to playlist Modal --> 
                <!-- Modal --> */}
                <div class="modal fade p-5" id="myAddToPlayList">
                <div class="modal-dialog modal-dialog-centered modal-lg p-5">
                    <div class="modal-content"> 
                    
                    {/* <!-- Modal Header --> */}
                    <div class="modal-header modal-sec-heading border-0">
                        <h4 class="modal-title pt-3 m-auto">Add to playlist</h4>
                        <a href="">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </a> </div>
                    {/* <!-- <hr style="border-bottom: 4px solid #ea3cdc;width: 80px;margin: 0px 0px 0px 300px;"> -->  */}
                    
                    {/* <!-- Modal body --> */}
                    <div class="modal-body model-content-one pb-5">
                        <div>
                        <h5>Playlist Tittle</h5>
                        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Playlist Name" title="Type in a name" class="form-control"/>
                        <div class="text-center m-2 pt-3"> <a href="#">
                            <div class="btn btn-round prm-btn font-12 pl-5 pr-5">SAVE</div>
                            </a> </div>
                        </div>
                        <div class="playicon">
                        <h5> Select Playlist</h5>
                        <hr/>
                        <div class="d-flex">
                            <div class="form-check-inline">
                            <input type="radio" class="form-check-input1" id="radio11" name="optradio" value="option1" checked/>
                            <label class="form-check-label" for="radio1">  
                            </label>
                            </div>
                            <div class="box"> <i class="fa fa-music fa-2x" aria-hidden="true"></i> </div>
                            <div class="pl-3">
                            <h6>Storiya Playlist 01</h6>
                            <p> <small><span class="text-primary"> 5 Stories</span><br/>
                                Last Updated on 2 hours ago</small> </p>
                            </div>
                            <div class="ml-auto pt-4"> <a><a>
                            <div class="btn btn-round prm-btn font-12 pl-5 pr-5">ADD</div>
                            </a></a> </div>
                        </div>
                        <hr/>
                        <div class="d-flex">
                            <div class="form-check-inline">
                            <input type="radio" class="form-check-input1" id="radio12" name="optradio" value="option1" checked/>
                            <label class="form-check-label" for="radio1">  
                            </label>
                            </div>
                            <div class="box"> <i class="fa fa-music fa-2x" aria-hidden="true"></i> </div>
                            <div class="pl-3">
                            <h6>Storiya Playlist 01</h6>
                            <p> <small><span class="text-primary"> 5 Stories</span><br/>
                                Last Updated on 2 hours ago</small> </p>
                            </div>
                            <div class="ml-auto pt-4"> <a href=""> 
                            <div class="btn btn-outline-primary btn-round font-12 pl-5 pr-5">ADD</div>
                            </a></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        </>
    )
}

export default Addtoplaylist;