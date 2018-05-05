import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './InternalServer.css';
import error from '../../images/500.jpg';

export default class InternalServer extends Component {
  render() {
    return (
      <div className="container">
          <div class="row error-content">
            <div class="col" xs={12}>
              <img src={error} />
              <p><span id="ops"> Ops! </span> There is a temporary error at the system. Please try again later. </p>
              <Link to="/">
                <button class="return-btn">GO BACK</button>
              </Link>
            </div>
          </div>
      </div>
    );
  }
}
