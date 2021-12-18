import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../images/hotel1.jpg";
import img2 from "../../images/hotel2.jpg";
import img3 from "../../images/hotel3.jpg";

import "./slide.css";

function ImagePreviews() {
  return (
    <>
      <Carousel className="mainslide">
        <div>
          <img src={img1} height="300px" width="700px" alt="a " />
        </div>
        <div>
          <img src={img2} height="300px" width="700px" alt="a" />
        </div>
        <div>
          <img src={img3} height="300px" width="700px" alt="a" />
        </div>
      </Carousel>
    </>
  );
}

export default ImagePreviews;
