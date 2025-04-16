// src/Carousel.jsx
import React from "react";

const Carousel = () => {
  return (
    <div className="slider-container">
      <div
        id="imageCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="7000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/logo.jpg" className="d-block w-100" alt="Image 1" />
          </div>
          <div className="carousel-item">
            <img src="images/logo.jpg" className="d-block w-100" alt="Image 2" />
          </div>
          <div className="carousel-item">
            <img src="images/logo.jpg" className="d-block w-100" alt="Image 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
