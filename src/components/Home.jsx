import React from "react";
import chris from "../assets/chris.jpg";

function Home() {

  return (
    
<div className="container">
  <div className = "spacer">

    {/* animated section */}
    <div className="text-box">
        <a href="#modalCenter" data-toggle="modal" data-target="#modalCenter">
        <span className = "click-here">C</span>
        <span className = "click-here">L</span>
        <span className = "click-here">I</span>
        <span className = "click-here">C</span>
        <span className = "click-here">K</span>
    <br/>
        <span className = "click-here">H</span>
        <span className = "click-here">E</span>
        <span className = "click-here">R</span>
        <span className = "click-here">E</span>
        </a>
    </div>

    {/* modal */}
    <div className="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Welcome to my CV Website</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img src = {chris} alt="chris.jpg"/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

  );
}

export default Home;