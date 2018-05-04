import React from 'react'
import logo from '../../images/logo.png'

const navLogo = () => {
  let width = {width: '70%'};
  return (
    <a className="navbar-brand" href="#">
      <img style={width} src={logo} alt="" />
    </a>
  )
};

export default navLogo;
