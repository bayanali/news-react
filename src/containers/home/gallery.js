import React from 'react'
import './Home.css';

const gallery = () => {
  return (

    <div className="container" id="gallery">
      <h5 className="headingline"><span className="section-heading2">gallery</span></h5>
      <hr className="hrstyle"/>

      <div id="carousel-gallery" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-gallery" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-gallery" data-slide-to="1"></li>
          <li data-target="#carousel-gallery" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="images\home\fb-2.jpg" />
            <div className="carousel-caption-white title my-auto">
              <h4>Faceblock campaign urges users to boycott Facebook for a day</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images\home\fb-3.jpg" />
            <div className="carousel-caption-white">
              <h4>Faceblock campaign urges users to boycott Facebook for a day</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images\home\fb-4.jpg" />
            <div className="carousel-caption-white">
              <h4>Faceblock campaign urges users to boycott Facebook for a day</h4>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel-gallery" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#carousel-gallery" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div>

    </div>

  );
}

export default gallery
