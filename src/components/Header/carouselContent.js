import React from 'react'
import CarouselItem from './carouselItem'
import fb from '../images/home/fb.jpg'

const carouselContent = () => {
  const carouselItems = [
    {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"},
    {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"},
    {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"}
  ];

  return (
    <div>
    <CarouselItem imgsrc={carouselItems[0].imgsrc} title={carouselItems[0].title} body={carouselItems[0].body}/>
    <CarouselItem imgsrc={carouselItems[1].imgsrc} title={carouselItems[1].title} body={carouselItems[1].body}/>
    <CarouselItem imgsrc={carouselItems[2].imgsrc} title={carouselItems[2].title} body={carouselItems[2].body}/>
    </div>

  );
};

export default carouselContent;
