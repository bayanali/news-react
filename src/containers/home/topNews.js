import React from 'react'
import './Home.css';
import fb2 from '../../images/home/fb-2.jpg';
import fb3 from '../../images/home/fb-3.jpg';
import fb4 from '../../images/home/fb-4.jpg';
import salah from '../../images/home/salah.jpg';
import mark from '../../images/home/fb.jpg';
import avatar from '../../images/avatar.png';
import homeVideo from '../../images/home/Homevideo.png';
import homeLive from '../../images/home/Homelive.png';
import {Carousel} from 'react-bootstrap'

const topNews = () => {
  const news = [
    {title: 'Faceblock campaign urges users to boycott Facebook for a day', img: fb2},
    {title: 'Faceblock campaign urges users to boycott Facebook for a day', img: fb3},
    {title: 'Faceblock campaign urges users to boycott Facebook for a day', img: fb4},
    {title: 'Faceblock campaign urges users to boycott Facebook for a day', img: fb3}
  ]

  return (
    <div id="top_news" className="container">

      <h5 className="headingline"><span className="section-heading">Top News </span></h5>
      <hr className="hrstyle"/>

      <div className="container">
        <div className="row">
          <div className="col big-post">
            <div className="row">
              <div className="col">
                <img src={news[0].img} className="img-fluid" />
              </div>
            </div>

            <br/>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h4 className="title my-auto">{news[0].title}</h4>
                  <hr className="hrstyle"/>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col my-auto post-details">
                  <img src={avatar} className="img-fluid post-details-img "  /> Amruismail
                </div>
                <div className="col my-auto post-details">
                  <a href="#" className="fa fa-clock-o" />25 MINS AGO
                </div>
                <div className="col">
                  <a className="post-details" href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col small-post">
            <div className="row">
              <div className="col">
                <img src={news[1].img} className="img-fluid"  />
              </div>
              <div className="col my-auto no-gutters">
                <h5>{news[1].title}</h5>
                <hr className="short-hr"/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img src={news[2].img} className="img-fluid" align="left"  />
              </div>
              <div className="col my-auto">
                <h5>{news[2].title}</h5>
                <hr className="short-hr"/>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img src={news[3].img} className="img-fluid" />
              </div>
              <div className="col my-auto">
                <h5>{news[3].title}</h5>
                <hr className="short-hr"/>
              </div>
            </div>
          </div>
        </div>

        <br/>
        <div className="row">
          <div className="col news-option">
            More news on #Egypt
          </div>
          <div className="col news-option">
            <a href="#" className="fa fa-star"/>Following
          </div>
          <div className="col news-option">
            <a href="#" className="fa fa-envelope"/>Get Email updates
          </div>
          <div className="col">
          </div>
          <div className="col">
          </div>
          <div className="col">
          </div>
        </div>
      </div>

      <div className="container-elements">
        <img src={homeVideo} alt="" className="img-fluid" />
      </div>

      <div className="row-center">
        <hr className="hrhome"/>
        <ul className="nav justify-content-center">
          <li className="nav-item-home">
            <a className="nav-link-home active" data-toggle="tab" href="#sports">SPORTS</a>
          </li>
          <li className="nav-item-home">
            <a className="nav-link-home" data-toggle="tab" href="#life">LIFE</a>
          </li>
          <li className="nav-item-home">
            <a className="nav-link-home" data-toggle="tab" href="#money">MONEY</a>
          </li>
          <li className="nav-item-home">
            <a className="nav-link-home" data-toggle="tab" href="#tech">TECH</a>
          </li>
          <li className="nav-item-home">
            <a className="nav-link-home" data-toggle="tab" href="#travel">TRAVEL</a>
          </li>
          <li className="nav-item-home">
            <a className="nav-link-home" data-toggle="tab" href="#style">STYLE</a>
          </li>
          <li className="nav-item-home">
            <a className="nav-link-home" data-toggle="tab" href="#weather">WEATHER</a>
          </li>
          <li className="nav-item-home">
            <a className="nav-link-home" data-toggle="tab" href="#health">HEALTH</a>
          </li>
          <li className="nav-item-home">
            <a className="nav-link-home" data-toggle="tab" href="#job">JOB</a>
          </li>
          <li className="nav-item-home">
            <a className="nav-link-home" data-toggle="tab" href="#network">NETWORK</a>
          </li>
        </ul>
        <br/>

        <div id="myTabContent" className="tab-content">

          <div className="tab-pane fade active show" id="sports">
            <Carousel id="carousel-sports">
              <Carousel.Item>
                  <div className="row no-gutters">
                    <div className="col-7 ">
                      <img src={salah} alt="" className="img-fluid" />
                    </div>
                    <div className="col-5 homeslider-right">
                      <div className="slidertitle">
                        <p> Mohamed Salah can improve in front of goal, says Jurgen Klopp </p>
                      </div>
                      <div className="sliderbody">
                        <p> Liverpool boss Jurgen Klopp believes Mohamed Salah's scoring record could be even better this season. The Egyptian's scored 12 goals in 17 appearances for the Reds since his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah's scoring record could be even better this season. The Egyptian's scored 12 goals in 17 appearances for the</p>
                        <hr className="hr-home-slider"/>
                        <div className="row homeslider-right-footer">
                          <div className="col-4">
                            <a href="#"> read more</a>
                          </div>
                          <div className="offset-5 col-3">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-linkedin"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="row no-gutters">
                    <div className="col-7 ">
                      <img src={salah} alt="" className="img-fluid" />
                    </div>
                    <div className="col-5 homeslider-right">
                      <div className="slidertitle">
                        <p> Mohamed Salah can improve in front of goal, says Jurgen Klopp </p>
                      </div>
                      <div className="sliderbody">
                        <p> Liverpool boss Jurgen Klopp believes Mohamed Salah's scoring record could be even better this season. The Egyptian's scored 12 goals in 17 appearances for the Reds since his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah's scoring record could be even better this season. The Egyptian's scored 12 goals in 17 appearances for the</p>
                        <hr className="hr-home-slider"/>
                        <div className="row homeslider-right-footer">
                          <div className="col-4">
                            <a href="#"> read more </a>
                          </div>
                          <div className="offset-5 col-3">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-linkedin"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
            </Carousel>
          </div>


          <div className="tab-pane fade show" id="life">
          <Carousel id="carousel-life">
            <Carousel.Item>
                <div className="row no-gutters">
                  <div className="col-7 ">
                    <img src={mark} alt="" className="img-fluid" />
                  </div>
                  <div className="col-5 homeslider-right">
                    <div className="slidertitle">
                      <p> soooooooooooooooooooso </p>
                    </div>
                    <div className="sliderbody">
                      <p> Liverpool boss Jurgen Klopp believes Mohamed Salah's scoring record could be even better this season. The Egyptian's scored 12 goals in 17 appearances for the Reds since his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah's scoring record could be even better this season. The Egyptian's scored 12 goals in 17 appearances for the</p>
                      <hr className="hr-home-slider"/>
                      <div className="row homeslider-right-footer">
                        <div className="col-4">
                          <a href="#"> read more</a>
                        </div>
                        <div className="offset-5 col-3">
                          <a href="#" className="fa fa-facebook"></a>
                          <a href="#" className="fa fa-twitter"></a>
                          <a href="#" className="fa fa-linkedin"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="row no-gutters">
                  <div className="col-7 ">
                    <img src={mark} alt="" className="img-fluid" />
                  </div>
                  <div className="col-5 homeslider-right">
                    <div className="slidertitle">
                      <p> Mohamed Salah can improve in front of goal, says Jurgen Klopp </p>
                    </div>
                    <div className="sliderbody">
                      <p> Liverpool boss Jurgen Klopp believes Mohamed Salah's scoring record could be even better this season. The Egyptian's scored 12 goals in 17 appearances for the Reds since his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah's scoring record could be even better this season. The Egyptian's scored 12 goals in 17 appearances for the</p>
                      <hr className="hr-home-slider"/>
                      <div className="row homeslider-right-footer">
                        <div className="col-4">
                          <a href="#"> read more </a>
                        </div>
                        <div className="offset-5 col-3">
                          <a href="#" className="fa fa-facebook"></a>
                          <a href="#" className="fa fa-twitter"></a>
                          <a href="#" className="fa fa-linkedin"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

        </div>
      </div>

      <div className="container-elements">
        <img src={homeLive} alt="" className="img-fluid" />
      </div>

    </div>
  );
}

export default topNews
