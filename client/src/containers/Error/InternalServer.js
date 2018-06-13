import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './InternalServer.css';
import error from '../../images/500.jpg';

export default class InternalServer extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.errorMessage}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/data');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="container">
          <div class="row error-content">
            <div class="col" xs={12}>
              <img src={error} />
              <p><span id="ops"> Ops! </span> {this.state.response} </p>

              <Link to="/">
                <button class="return-btn">GO BACK</button>
              </Link>
            </div>
          </div>
      </div>
    );
  }
}
