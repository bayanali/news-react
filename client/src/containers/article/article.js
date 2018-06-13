import React, {Component} from 'react';
import './article.css';
import authorPhoto from '../../images/article/people-3209886_960_720.png';
import time from '../../images/article/noun_126067_cc.png';
import video from '../../images/article/articlevideo.png';
import start from '../../images/star.png';
import email from '../../images/article/noun_497064_cc.png';
import bottom from '../../images/article/article.png';
import ArticleHeadTime from './articleHeadTime';
import ArticleHead from './articleHead'
import Carousel from '../../components/Header/carousel';
import logo from '../../images/logo.png';
import image1 from '../../images/img1.jpg';

export default class article extends Component {

state = {
    carouselItems :[
    {imgsrc: image1, title:"Blandit Rutrum, Erat et Sagittis. Lorem Ipsum Dolor, Sit Amet A", body:"Blandit rutrum, erat et egestas ultricies, dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo dolor sit ameta, auctor libero tempor..."},
    {imgsrc: image1, title:"Blandit Rutrum, Erat et Sagittis. Lorem Ipsum Dolor, Sit Amet A", body:"Blandit rutrum, erat et egestas ultricies, dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo dolor sit ameta, auctor libero tempor..."},
    {imgsrc: image1, title:"Blandit Rutrum, Erat et Sagittis. Lorem Ipsum Dolor, Sit Amet A", body:"Blandit rutrum, erat et egestas ultricies, dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo dolor sit ameta, auctor libero tempor..."}
  ],
  paragraph1: '',
  paragraph2: ''
};

componentDidMount() {
  this.callApi()
    .then(res => this.setState({ paragraph1: res.body.paragraph1,
                                 paragraph2: res.body.paragraph2}))
    .catch(err => console.log(err));
}

callApi = async () => {
  const response = await fetch('/api/data');
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};

  //NOTE: Please don't remove the Carousel; just put your work beneath it.
  render (){
    return(
    <div>
      <div>

      <Carousel items={this.state.carouselItems}/>

      <div id="article" class="container">
        <br/>
        <br/>
        <br/>
        <ArticleHead/>
        <hr class="hrstyle"/>

        <div>
          <p class="article-body">
            {this.state.paragraph1}
          </p>
          <br/>
          <br/>

          <img src={video} class="img-fluid"/>

          <br/>
          <br/>
          <br/>
          <p class="article-body">
            {this.state.paragraph2}
          </p>
          <br/></div>

        <div class="row">
          <div class="col-2 news-option">
            More news on #Egypt
          </div>
          <div class="col-2 news-option">
            <img src={start} class="img-fluid"/>
            Following
          </div>
          <div class="col-3 news-option">
            <img src={email} class="img-fluid"/>
            <a href="#">Get Email updates</a>
          </div>
          <div class="offset-4 col-1">
            <span class="articleicons">
              <a href="#" class="fa fa-facebook"></a>
            </span>
            <span class="articleicons">
              <a href="#" class="fa fa-twitter twitterpink"></a>
            </span>
            <span class="articleicons">
              <a href="#" class="fa fa-linkedin"></a>
            </span>
          </div>

          {/* <!-- <div class=" offset-2 col-1 articleicons">
                                              <a href="#" class="fa fa-facebook"></a> </div> <div class="col-1 articleicons"> <a href="#" class="fa fa-twitter twitterpink"></a> </div> <div class="col-1 articleicons"> <a href="#" class="fa fa-linkedin"></a> </div> --> */
          }

        </div>

        <br/>
        <br/>
        <div class="row">
          <div class="col text-center">
            <button type="button" class="btn-article">
              Back to Home
            </button>
          </div>
        </div>
        <br/>
        <br/>
        <br/>

        <div class="cont">
          <img src={bottom} class="img-fluid"/>
          <button type="button" name="button" class="btnn">Read More</button>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>)

    <br/>
    <br/>
    <br/>
    <br/>
  </div>);
  }
}
