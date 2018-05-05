import React from 'react'
import {Carousel} from 'react-bootstrap'
import fb from '../../images/home/fb.jpg'

const carousel = () => {
  const carouselItems = [
    {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"},
    {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"},
    {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"}
  ];
  return (
    <Carousel className="main-carousel">
      <Carousel.Item className="inner-carousel">
        <img alt="first slide" src={carouselItems[0].imgsrc} className="d-block w-100" />
        <Carousel.Caption className="carousel-caption caption-header">
          <h4>{carouselItems[0].title}</h4>
          <p>{carouselItems[0].body}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="inner-carousel">
        <img alt="first slide" src={carouselItems[1].imgsrc} className="d-block w-100" />
        <Carousel.Caption className="carousel-caption caption-header">
        <h4>{carouselItems[1].title}</h4>
          <p>{carouselItems[1].body}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="inner-carousel">
        <img alt="first slide" src={carouselItems[2].imgsrc} className="d-block w-100" />
        <Carousel.Caption className="carousel-caption caption-header">
        <h4>{carouselItems[2].title}</h4>
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
