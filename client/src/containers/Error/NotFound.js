import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';
import error from '../../images/404.jpg';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
          <div class="row error-content">
            <div class="col" xs={12}>
              <img src={error} />
              <p> <span id="opsies"> Opsies! </span> The page you are looking for cannot be found! </p>
              <Link to="/">
                <button class="return-btn btn-md">GO BACK</button>
              </Link>
            </div>
          </div>
      </div>
    );
  }
}
