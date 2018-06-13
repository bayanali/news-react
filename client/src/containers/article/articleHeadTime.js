import React from 'react';
import './article.css';
import Moment from 'react-moment';
import 'moment-timezone';

const articleHeadTime = () => {

const publishDate = "Fri May 04 2018 17:48:28 GMT+0200 (EET)" //Should Fetched from databases

return (
    <div>
      <div className = "row">

        <div className = "col-1">

          <div className = "fa fa-clock-o" href="#"> </div>
        </div>

        <div id="article-time" className = "col-8-md">
           <Moment fromNow ago interval={1000}>{publishDate}</Moment> AGO
        </div>

    </div>
  </div>

  );
}

export default articleHeadTime;
