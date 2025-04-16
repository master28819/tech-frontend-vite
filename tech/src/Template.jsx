// src/MainContent.jsx
import React from "react";
import Carousel from "./Carousel";

const Template = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to Tech2xplore</h1>
      <div className="row">
        <div className="col-md-8">
          <Carousel />
        </div>
        <div className="col-md-4">
          <div className="content">
            {/* Add other content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
