import React from 'react';
import './article.css';
import Carousel from '../../components/Header/carousel';
import logo from '../../images/logo.png';

const article = () => {
  // NOTE: Please don't remove the Carousel; just put your work beneath it.
  return (
    <div>
    <Carousel />

    <div id="article" className="container">
    <br/>
      <br/>
        <br/>
          <div className="row">
            <h2 id="article-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
          </div>
          <div className="row">
            <br/>
              <div id="article-author" className="col">
                <img src="images\article\people-3209886_960_720.png"/>
                  AMRUISMAIIL
                </div>
                <br/>
                  <div id="article-time" className="col">
                    <img src="images\article\noun_126067_cc.png"/>
                      25MIN AGO
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div>

                      <hr className="hrstyle"/>

                        <div>
                          <p className="article-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                          </p>
                          <br/>
                            <br/>

                              <img src="images\article\articlevideo.png" className="img-fluid"/>

                                <br/>
                                  <br/>
                                    <br/>
                                      <p className="article-body">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                      </p>
                                      <br/></div>

                                      <div className="row">
                                        <div className="col-2 news-option">
                                          More news on #Egypt
                                        </div>
                                        <div className="col-2 news-option">
                                          <img src="images/star.png" className="img-fluid"/>
                                            Following
                                          </div>
                                          <div className="col-3 news-option">
                                            <img src="images/mail.png" className="img-fluid"/>
                                              <a href="#">Get Email updates</a>
                                            </div>
                                            <div className="offset-4 col-1">
                                              <span className="articleicons">
                                                <a href="#" className="fa fa-facebook"></a>
                                              </span>
                                              <span className="articleicons">
                                                <a href="#" className="fa fa-twitter twitterpink"></a>
                                              </span>
                                              <span className="articleicons">
                                                <a href="#" className="fa fa-linkedin"></a>
                                              </span>
                                            </div>

                                            {/* <!-- <div className=" offset-2 col-1 articleicons">
                                              <a href="#" className="fa fa-facebook"></a> </div> <div className="col-1 articleicons"> <a href="#" className="fa fa-twitter twitterpink"></a> </div> <div className="col-1 articleicons"> <a href="#" className="fa fa-linkedin"></a> </div> --> */}

                                          </div>

                                          <br/>
                                            <br/>
                                              <div className="row">
                                                <div className="col text-center">
                                                  <button type="button" className="btn-article">
                                                    Back to Home
                                                  </button>
                                                </div>
                                              </div>
                                              <br/>
                                                <br/>
                                                  <br/>

                                                    <div className="cont">
                                                      <img src="images\article\article.png" className="img-fluid"/>
                                                        <button type="button" name="button" className="btnn">Read More</button>
                                                      </div>

                                                      <br/>
                                                        <br/>
                                                          <br/>
                                                            <br/>
                                                           </div>
                                                          </div>
                                                        </div>
                      </div>
  )
};

export default article;
