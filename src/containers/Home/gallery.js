import React from 'react'
import {Carousel} from 'react-bootstrap'
import fb2 from '../../images/home/fb-2.jpg';
import fb3 from '../../images/home/fb-3.jpg';
import fb4 from '../../images/home/fb-4.jpg';
import './Home.css';

const gallery = () => {
  const galleryContent = [
    {title: 'Faceblock campaign urges users to boycott Facebook for a day', img: fb2},
    {title: 'Faceblock campaign urges users to boycott Facebook for a day', img: fb3},
    {title: 'Faceblock campaign urges users to boycott Facebook for a day', img: fb4}
  ];
  return (

    <div className="container" id="gallery">
      <h5 className="headingline"><span className="section-heading2">gallery</span></h5>
      <hr className="hrstyle"/>

      <Carousel id="carousel-gallery">
        <Carousel.Item>
          <img className="d-block w-100" src={galleryContent[0].img} />
          <div className="carousel-caption-white title my-auto">
            <h4>{galleryContent[0].title}</h4>
          </div>
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block w-100" src={galleryContent[1].img} />
            <div className="carousel-caption-white">
              <h4>{galleryContent[1].title}</h4>
            </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={galleryContent[2].img} />
          <div className="carousel-caption-white">
            <h4>{galleryContent[2].title}</h4>
          </div>
        </Carousel.Item>

        </Carousel>
      </div>
  );
}

export default gallery
