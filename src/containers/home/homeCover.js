import React from 'react'
import './Home.css';
import homeGrey from '../../images/home/Homegrey.png';

const homeCover = () => {
  return (
    <div className="row container-elements" id="homecover">
      <div className="img-wrapper-home">
        <img className="img-fluid" src={homeGrey}/>
        <div className="img-overlay-home">
          <button className="btn btn-outline-primary event-btn-home">subscribe now</button>
        </div>
      </div>
    </div>
  );
}

export default homeCover
