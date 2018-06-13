import React from 'react'
import Carousel from './carousel'
import NavBar from './navBar'

const header = () => {
  return (
    <div id="header">
      <NavBar />
      <Carousel />
    </div>
  );
}

export default header
