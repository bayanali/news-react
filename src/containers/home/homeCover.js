import React from 'react'
import './Home.css';

const homeCover = () => {
  return (
    <div className="row container-elements" id="homecover">
      <div className="img-wrapper-home">
        <img className="img-fluid" src="images\home\Homegrey.png"/>
        <div className="img-overlay-home">
          <button className="btn btn-outline-primary event-btn-home">subscribe now</button>
        </div>
      </div>
    </div>
  );
}

export default homeCover
