import React from "react";

const Slider = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide carousel-hero"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item c-item active" data-bs-interval="10000">
          <img
            src="https://images.pexels.com/photos/978587/pexels-photo-978587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Sea image"
            className="d-block w-100 c-img"
          />
        </div>
        <div className="carousel-item c-item" data-bs-interval="2000">
          <img
            src="https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Actors image"
            className="d-block w-100 c-img"
          />
        </div>
        <div className="carousel-item c-item">
          <img
            src="https://images.pexels.com/photos/14580928/pexels-photo-14580928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Mountain Image"
            className="d-block w-100 c-img"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
