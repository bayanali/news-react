import React from 'react'
import {Carousel} from 'react-bootstrap'

const carouselItem = (props) => {
  console.log(props);
  return (
    <Carousel.Item>
      <img alt="first slide" src={props.imgsrc} />
      <Carousel.Caption>
        {props.title}
        <p>{props.body}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default carouselItem;


/*
<div className="carousel-item active">
  <img className="d-block w-100" src={props.imgsrc}  alt="First slide"/>
  <div className="container">
    <div className="carousel-caption caption-header">
      {props.title}
      <p>{props.body}</p>
    </div>
  </div>
</div>
*/
