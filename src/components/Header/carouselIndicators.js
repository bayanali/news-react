import React from 'react'

const carouselIndicators = () => {
  return (
    <ol className="carousel-indicators">
      <li data-target="#main-carousel" data-slide-to="0" className="active"></li>
      <li data-target="#main-carousel" data-slide-to="1"></li>
      <li data-target="#main-carousel" data-slide-to="2"></li>
    </ol>
  );
};

export default carouselIndicators;
