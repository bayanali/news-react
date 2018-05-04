import React from 'react'
import './NavItem.css'


const navItem = () => {
  let color = {color: "#fff"};
  return (
    <ul id="ul" className="navbar-nav mr-auto">
      <li className="nav-item">
        <a id="a" className="nav-link active" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a id="a" className="nav-link" href="style">Style<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a id="a" className="nav-link" href="/not-found">Grooming</a>
      </li>
      <li className="nav-item">
        <a id="a" className="nav-link" href="/not-found">Women</a>
      </li>
      <li className="nav-item">
        <a id="a" className="nav-link" href="/article">Entertainment</a>
      </li>
      <li className="nav-item">
        <a id="a" className="nav-link" href="/not-found">Culture</a>
      </li>
      <li className="nav-item">
        <a id="a" className="nav-link" href="/internal-server-error">Videos</a>
      </li>
    </ul>

  )
};

export default navItem;
