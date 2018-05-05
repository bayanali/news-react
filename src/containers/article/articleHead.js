import React from 'react';
import './article.css';
import ArticleHeadTime from './articleHeadTime';
import authorPhoto from '../../images/article/people-3209886_960_720.png';


const articleHead = () => {
  const articleTitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  const articleAuthoer = "AMRUISMAIIL";

return (
    <div>
      <div class = "row">
        <h2 id="article-title">
          {articleTitle}
        </h2>
      </div>

      <div class="row">
        <br/>
          <div id="article-author" class="col">
            <img src = {authorPhoto}/>
            {articleAuthoer}
          </div>

            <br/>
              <div id="article-time" class="col">
              <ArticleHeadTime/>
                </div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
    </div>
  </div>

    )
};

export default articleHead;
