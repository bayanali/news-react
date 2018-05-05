import React, {Component} from 'react';
import Carousel from '../../components/Header/carousel';
import './Home.css';

export default class Home extends Component {
  render() {

    // NOTE: Please don't remove the Carousel; just put your work beneath it.
    return (
      <div id="home-page">
      <Carousel />
        HOME PAGE
      </div>
    );
  }
}
