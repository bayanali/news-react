import React from 'react'
import CarouselIndicators from './carouselIndicators'
import CarouselContent from './carouselContent'
import CarouselItem from './carouselItem'
import {Carousel} from 'react-bootstrap'
import fb from '../images/home/fb.jpg'

const carousel = () => {
  const carouselItems = [
    {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"},
    {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"},
    {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"}
  ];
  return (
    <Carousel className="main-carousel">
      <Carousel.Item>
        <img alt="first slide" src={carouselItems[0].imgsrc} />
        <Carousel.Caption>
          {carouselItems[0].title}
          <p>{carouselItems[0].body}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="first slide" src={carouselItems[1].imgsrc} />
        <Carousel.Caption>
          {carouselItems[1].title}
          <p>{carouselItems[1].body}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="first slide" src={carouselItems[2].imgsrc} />
        <Carousel.Caption>
          {carouselItems[2].title}
          <p>{carouselItems[2].body}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousel;

/*
<div id="main-carousel" className="carousel slide main-carousel" data-ride="carousel">
  <CarouselIndicators />
  <CarouselContent />

  <a className="carousel-control-prev" href="#main-carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#main-carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
*/
