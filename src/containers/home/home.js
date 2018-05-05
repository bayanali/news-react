import React, {Component} from 'react';
import Carousel from '../../components/Header/carousel';
import './Home.css';
import TopNews from './topNews'
import HomeCover from './homeCover'
import Gallery from './gallery'
import AdSpace from './adSpace'


export default class Home extends Component {
  render() {

    // NOTE: Please don't remove the Carousel; just put your work beneath it.
    return (
      <div id="home-page">
        <Carousel />
        <TopNews />
        <HomeCover />
        <Gallery />
        <AdSpace />
      </div>
    );
  }
}
