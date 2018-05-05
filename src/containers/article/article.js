import React from 'react';
import './article.css';
import Carousel from '../../components/Header/carousel';
import logo from '../../images/logo.png';

const article = () => {
  // NOTE: Please don't remove the Carousel; just put your work beneath it.
  return (
    <div>
    <Carousel />

    <div id="article" class="container">
    <br/>
      <br/>
        <br/>
          <div class="row">
            <h2 id="article-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
          </div>
          <div class="row">
            <br/>
              <div id="article-author" class="col">
                <img src="images\article\people-3209886_960_720.png"/>
                  AMRUISMAIIL
                </div>
                <br/>
                  <div id="article-time" class="col">
                    <img src="images\article\noun_126067_cc.png"/>
                      25MIN AGO
                    </div>
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"></div>
                    <div class="col"></div>
                    <div>

                      <hr class="hrstyle"/>

                        <div>
                          <p class="article-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                          </p>
                          <br/>
                            <br/>

                              <img src="images\article\articlevideo.png" class="img-fluid"/>

                                <br/>
                                  <br/>
                                    <br/>
                                      <p class="article-body">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                      </p>
                                      <br/></div>

                                      <div class="row">
                                        <div class="col-2 news-option">
                                          More news on #Egypt
                                        </div>
                                        <div class="col-2 news-option">
                                          <img src="images/star.png" class="img-fluid"/>
                                            Following
                                          </div>
                                          <div class="col-3 news-option">
                                            <img src="images/mail.png" class="img-fluid"/>
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
                                              <a href="#" class="fa fa-facebook"></a> </div> <div class="col-1 articleicons"> <a href="#" class="fa fa-twitter twitterpink"></a> </div> <div class="col-1 articleicons"> <a href="#" class="fa fa-linkedin"></a> </div> --> */}

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
                                                      <img src="images\article\article.png" class="img-fluid"/>
                                                        <button type="button" name="button" class="btnn">Read More</button>
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