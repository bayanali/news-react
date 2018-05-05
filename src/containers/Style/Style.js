import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navcarousel from '../../components/Header/carousel';
import './Style.css';
import avatar from '../../images/avatar.png';
import time from '../../images/time.png';
import bigpost from '../../images/bigpost.jpg';
import post1 from '../../images/post1.jpg';
import post2 from '../../images/post2.jpg';
import post3 from '../../images/post3.jpg';
import star from '../../images/star.png';
import mail from '../../images/mail.png';
import post from '../../images/post.jpg';
import ad from '../../images/ad.PNG';
import call from '../../images/call.jpg';
import article from '../../images/article/article.png'
import event from '../../images/event.jpg';
import image1 from '../../images/img1.jpg';
import { Carousel } from 'react-bootstrap'

export default class Style extends Component {

  render() {
    // NOTE: Please don't remove the Carousel; just put your work beneath it.
    return (
      <div>
        <Navcarousel />

        <div id="top_news" className="container">
          <h5 className="headingline"><span className="section-heading2">Top News </span></h5>
          <hr className="hrstyle" />

          <div className="container">
            <div className="row">
              <div className="col big-post">
                <div className="row">
                  <div className="col">
                    <img src={bigpost} className="img-fluid" />
                  </div>
                </div>
                <br />
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h3 className="title my-auto">Lebrons Cleveland Caviars Fire Coach Midseason</h3>
                      <hr className="hrstyle" />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col my-auto post-details">
                      <img src={avatar} className="img-fluid post-details-img " /> Amruismail
                  </div>
                    <div className="col my-auto post-details">
                      <img src={time} className="img-fluid post-details-img" /> 25 mins ago
                  </div>
                    <div className="col">
                      <a className="post-details link" href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col small-post">
                <div className="row">
                  <div className="col">
                    <img src={post1} className="img-fluid" />
                  </div>
                  <div className="col my-auto">
                    <p>Lorem ipsum dolor sit amet, consul molestiae inciderint eos ne, no accumsan adipisci qualisque cum, debet conceptam nec te. Exerci detraxit consectetuer pri et.</p>
                    <hr className="short-hr" />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img src={post2} className="img-fluid" align="left" />
                  </div>
                  <div className="col my-auto">
                    <p>Lorem ipsum dolor sit amet, consul molestiae inciderint eos ne, no accumsan adipisci qualisque cum, debet conceptam nec te. Exerci detraxit consectetuer pri et.</p>
                    <hr className="short-hr" />
                  </div>

                </div>
                <div className="row">
                  <div className="col">
                    <img src={post3} className="img-fluid" />
                  </div>
                  <div className="col my-auto">
                    <p>Lorem ipsum dolor sit amet, consul molestiae inciderint eos ne, no accumsan adipisci qualisque cum, debet conceptam nec te. Exerci detraxit consectetuer pri et.</p>
                    <hr className="short-hr" />
                  </div>
                </div>

              </div>

            </div>

            <br />
            <div className="row">
              <div className="col news-option">
                More news on #Egypt
            </div>
              <div className="col news-option">
                <img src={star} className="img-fluid" /> Following
            </div>
              <div className="col news-option">
                <img src={mail} className="img-fluid" />
                <a className="link" href="#">Get Email updates</a>
              </div>
              <div className="col">
              </div>
              <div className="col">
              </div>
              <div className="col">
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br />
        <div id="events" className="container">
          <h5 className="headingline"><span className="section-heading2">Events </span></h5>
          <hr className="hrstyle" />
          <div className="img-wrapper">
            <img className="img-fluid" src={event} />
            <div className="img-overlay">
              <button className="btn btn-outline-primary event-btn">Read More</button>
            </div>
          </div>

        </div>
        <br /><br /><br />
        <div id="photos" className="container">
          <h5 className="headingline"><span className="section-heading2">Photos</span></h5>
          <hr className="hrstyle" />
          <Carousel id="photos-carousel">
            <Carousel.Item>
              <img src={bigpost} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src = {bigpost} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={bigpost} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        {/* <div id="photos-carousel" className="carousel slide main-carousel" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#photos-carousel" data-slide-to="0" className="active"></li>
              <li data-target="#photos-carousel" data-slide-to="1"></li>
              <li data-target="#photos-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="images/bigpost.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="images/bigpost.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="images/bigpost.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#photos-carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#photos-carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div> */}
        </div>
        <br /><br /><br />
        <div id="featurednews" className="container">
          <h5 className="headingline"><span className="section-heading2">Featured News</span></h5>
          <hr className="hrstyle" />
          <div className="container">
            <div className="row">
              <div className="col big-post">
                <div className="row">
                  <div className="col">
                    <img src={post} className="img-fluid" />
                  </div>
                </div>
                <br />
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h3 className="title my-auto">Lebrons Cleveland Caviars Fire Coach Midseason</h3>
                      <p className="news-detail">Blandit rutrum, erat et egestas ultricies, dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo dolor sit ameta, auctor libero tempor...</p>
                      <hr className="hrstyle" />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col my-auto post-details">
                      <img src={avatar} className="img-fluid post-details-img " /> Amruismail
                  </div>
                    <div className="col my-auto post-details">
                      <img src={time} className="img-fluid post-details-img" /> 25 mins ago
                  </div>
                    <div className="col">
                      <a className="post-details link" href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col big-post">
                <div className="row">
                  <div className="col">
                    <img src={post} className="img-fluid" />
                  </div>
                </div>
                <br />
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h3 className="title my-auto">Lebrons Cleveland Caviars Fire Coach Midseason</h3>
                      <p className="news-detail">Blandit rutrum, erat et egestas ultricies, dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo dolor sit ameta, auctor libero tempor...</p>
                      <hr className="hrstyle" />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col my-auto post-details">
                      <img src={avatar} className="img-fluid post-details-img " /> Amruismail
                  </div>
                    <div className="col my-auto post-details">
                      <img src={time} className="img-fluid post-details-img" /> 25 mins ago
                  </div>
                    <div className="col">
                      <a className="post-details link" href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <br />

            <div className="row">
              <div className="col big-post">
                <div className="row">
                  <div className="col">
                    <img src={post} className="img-fluid" />
                  </div>
                </div>
                <br />
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h3 className="title my-auto">Lebrons Cleveland Caviars Fire Coach Midseason</h3>
                      <p className="news-detail">Blandit rutrum, erat et egestas ultricies, dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo dolor sit ameta, auctor libero tempor...</p>
                      <hr className="hrstyle" />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col my-auto post-details">
                      <img src={avatar} className="img-fluid post-details-img " /> Amruismail
                    </div>
                    <div className="col my-auto post-details">
                      <img src={time} className="img-fluid post-details-img" /> 25 mins ago
                    </div>
                    <div className="col">
                      <a className="post-details link" href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col big-post">
                <div className="row">
                  <div className="col">
                    <img src={post} className="img-fluid" />
                  </div>
                </div>
                <br />
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h3 className="title my-auto">Lebrons Cleveland Caviars Fire Coach Midseason</h3>
                      <p className="news-detail">Blandit rutrum, erat et egestas ultricies, dolor tortor egestas enim, quiste rhoncus sem purus eu sapien. Curabitur a orci nec risus lacinia vehic. Lorem ipsum dolor adipcising elit. Erat egestan sagittis lorem aupo dolor sit ameta, auctor libero tempor...</p>
                      <hr className="hrstyle" />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col my-auto post-details">
                      <img src={avatar} className="img-fluid post-details-img " /> Amruismail
                    </div>
                    <div className="col my-auto post-details">
                      <img src={time} className="img-fluid post-details-img" /> 25 mins ago
                    </div>
                    <div className="col">
                      <a className="post-details link" href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col text-center">
                    <br />
                    <button className="btn btn-primary news-btn">See More</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <br /><br /><br />

        <div className="img-wrapper">
          <img className="img-fluid" src={call} />
          <div className="call-img-overlay">
            <button className="btn btn-outline-primary event-btn">Read More</button>
          </div>
        </div>

        <br /><br /><br />

        <div id="ad-content" className="container">
          <h5 className="headingline"><span className="section-heading2">Ad Content</span></h5>
          <hr className="hrstyle" />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="ad">
                  <img src={ad} className="img-fluid" />
                  <div className="caption">Lorem ipsum blandit rutrum, erat et egestas</div>
                </div>
              </div>
              <div className="col">
                <div className="ad">
                  <img src={ad} className="img-fluid" />
                  <div className="caption">Lorem ipsum blandit rutrum, erat et egestas</div>
                </div>
              </div>
              <div className="col">
                <div className="ad">
                  <img src={ad} className="img-fluid" />
                  <div className="caption">Lorem ipsum blandit rutrum, erat et egestas</div>
                </div>
              </div>
            </div>
            <br /><br />
            <div className="cont">
              <img src={article} className="img-fluid" />
              <button type="button" name="button" className="clear-btn">Read More</button>
            </div>


          </div>
        </div>
        <br/><br/><br/>
      </div>
    );
  }
}
