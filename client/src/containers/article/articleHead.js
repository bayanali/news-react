import React, {Component} from 'react';
import './article.css';
import ArticleHeadTime from './articleHeadTime';
import authorPhoto from '../../images/article/people-3209886_960_720.png';

export default class articleHead extends Component {

state = {
  articleTitle : "",
  articleAuthoer : ""
}

componentDidMount() {
  this.callApi()
    .then(res => this.setState({ articleTitle :res.title,
                                 articleAuthoer: res.author}))
    .catch(err => console.log(err));
}

callApi = async () => {
  const response = await fetch('/api/data');
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};

render(){
return (
    <div>
      <div class = "row">
        <h2 id="article-title">
          {this.state.articleTitle}
        </h2>
      </div>

      <div class="row">
        <br/>
          <div id="article-author" class="col">
            <img src = {authorPhoto}/>
            {this.state.articleAuthoer}
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
  }
}
