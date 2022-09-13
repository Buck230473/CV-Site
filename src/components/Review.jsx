import React from "react";

function Review(props) {

  return (
    <div className="carousel-item container-fluid">
      <div className = "img-ctn">
        <img className="review-img" src={props.rev} alt="review"/>
      </div>
    </div>
  );
}

export default Review;