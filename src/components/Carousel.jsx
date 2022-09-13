import React from "react";
import Review from "./Review";
import png1 from "../assets/1.png";
import reviews from "../reviews.js";

function createReview(reviews){

  return(   
    <Review
      rev={reviews.iName}
    />
  );
}

function Carousel() {

  return (
    <section id="carousel">

      <div id="chart-carousel" className="carousel slide" data-interval="4000" data-ride="carousel">
      
        <div className="carousel-inner">
          <div className="carousel-item active container-fluid">
            <div className = "img-ctn">
              <img className="review-img" src={png1} alt="review"/>
            </div>
          </div>

          {reviews.map(createReview)}

        </div>

        <a className="carousel-control-prev" href="#chart-carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#chart-carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>

      </div>

    </section>

  );
}

export default Carousel;