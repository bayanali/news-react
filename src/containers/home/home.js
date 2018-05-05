import React, {Component} from 'react';
import Carousel from '../../components/Header/carousel';
import './Home.css';
import fb from '../../images/home/fb.jpg'
import HomeCover from './homeCover'
import Gallery from './gallery'
import AdSpace from './adSpace'
<<<<<<< HEAD
import TopNews from './topNews'

export default class Home extends Component {

=======
import fb from '../../images/home/fb.jpg'

export default class Home extends Component {
>>>>>>> 972752fe5396741ca9533b6efaf425235cef85c0
  state = {
    carouselItems: [
      {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"},
      {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"},
      {imgsrc: fb, title:"News of Facebook's secret tool to delete executive messages caps days of chaos", body:"As Sheryl Sandberg mounts apology tour, company is under fire again over special privacy privileges not granted to regular users"}
    ]
  }
  render() {
    // NOTE: Please don't remove the Carousel; just put your work beneath it.
    return (
      <div id="home-page">
        <Carousel items={this.state.carouselItems}/>
<<<<<<< HEAD
         <TopNews />
         <HomeCover />

         <Gallery />

=======
        <TopNews />
        <HomeCover />
        <Gallery />
        <AdSpace />
>>>>>>> 972752fe5396741ca9533b6efaf425235cef85c0
      </div>
    );
  }
}