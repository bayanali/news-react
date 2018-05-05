import React from 'react'
import avatar from '../../images/avatar.png';
import fb2 from '../../images/home/fb-2.jpg';
import fb3 from '../../images/home/fb-3.jpg';
import fb4 from '../../images/home/fb-4.jpg';
import './Home.css';

const adSpace = () => {
  const ads = [
    {title: 'Faceblock campaign urges users to boycott Facebook for a day', img: fb2},
    {title: 'Faceblock campaign urges users to boycott Facebook for a day', img: fb3},
    {title: 'Faceblock campaign urges users to boycott Facebook for a day', img: fb4}
  ]
  return (
    <div className="container">
      <h5 className="headingline"><span className="section-heading2">ad space</span></h5>
      <hr className="hrstyle" />
      <div className="row">
        <div className="col big-post">
          <div className="row">
            <div className="col">
              <img src={ads[0].img} className="img-fluid" />
            </div>
          </div>
          <br/>
          <div className="container">
            <div className="row">
              <div className="col">
                <h4 className="title my-auto">{ads[0].title}</h4>
                <br/>
                <hr className="hrstyle2" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col my-auto post-details2">
                <img src={avatar} className="img-fluid post-details-img " /> Amruismail
              </div>
              <div className="col my-auto post-details2">
                <a href="#" className="fa fa-clock-o" />25 MINS AGO
              </div>
              <div className="col">
                <a className="post-details2" href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col big-post">
          <div className="row">
            <div className="col">
              <img src={ads[1].img} className="img-fluid" />
            </div>
          </div>
          <br/>
          <div className="container">
            <div className="row">
              <div className="col">
                <h4 className="title my-auto">{ads[1].title}</h4>
                <br/>
                <hr className="hrstyle2" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col my-auto post-details2">
                <img src={avatar} className="img-fluid post-details-img " /> Amruismail
              </div>
              <div className="col my-auto post-details2">
                <a href="#" className="fa fa-clock-o" />25 MINS AGO
              </div>
              <div className="col">
                <a className="post-details2" href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col big-post">
          <div className="row">
            <div className="col">
              <img src={ads[2].img} className="img-fluid" />
            </div>
          </div>
          <br/>
          <div className="container">
            <div className="row">
              <div className="col">
                <h4 className="title my-auto">{ads[2].title}</h4>
                <br/>
                <hr className="hrstyle2" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col my-auto post-details2">
                <img src={avatar} className="img-fluid post-details-img" /> Amruismail
              </div>
              <div className="col my-auto post-details2">
              <a href="#" className="fa fa-clock-o" />25 MINS AGO
              </div>
              <div className="col">
                <a className="post-details2" href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </div>

  );
}

export default adSpace
