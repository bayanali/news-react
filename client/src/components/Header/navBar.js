import React from 'react';
import NavLogo from './navLogo';
import NavSearch from './navSearch';
import NavItem from './navItem';
import './NavBar.css';


const navBar = (props) => {
  return (
    <nav style={props.color} className="main-nav navbar navbar-expand-lg navbar-light">
      <div className="container">
        <NavLogo />

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <NavItem />
          <NavSearch />
        </div>

      </div>
    </nav>

  );
}

export default navBar
