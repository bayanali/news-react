import React from 'react'

const navItem = () => {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link active" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Style<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Grooming</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Women</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Entertainment</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Culture</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Videos</a>
      </li>
    </ul>

  )
};

export default navItem;
