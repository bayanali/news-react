import React, { Component } from 'react';
import './Search.css';
import img1 from '../../images/img1.jpg';
import Article from '../article/article';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const searchResult = (props) => {

  const results = [
    { img: img1, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.' },
    { img: img1, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.' },
    { img: img1, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.' },
    { img: img1, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.' },
    { img: img1, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.' },
    { img: img1, title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.' }
  ]

  return (

    <Router>
      <div id="display-results" className="container">

        <div className="row search-result">
          <div className="col">
            <img src={img1} className="img-fluid" />
          </div>

          <div className="col">
            <a href="/article"><h4 className="search-body-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4></a>
            <p className="search-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
        </div>

        <div className="row search-result">
          <div className="col">
            <img src={img1} className="img-fluid" />
          </div>

          <div className="col">
            <a href="/article"><h4 className="search-body-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4></a>
            <p className="search-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
        </div>

        <div className="row search-result">
          <div className="col">
            <img src={img1} className="img-fluid" />
          </div>

          <div className="col">
            <a href="/article"><h4 className="search-body-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4></a>
            <p className="search-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
        </div>

        <div className="row search-result">
          <div className="col">
            <img src={img1} className="img-fluid" />
          </div>

          <div className="col">
            <a href="/article"><h4 className="search-body-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4></a>
            <p className="search-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
        </div>

        <div className="row search-result">
          <div className="col">
            <img src={img1} className="img-fluid" />
          </div>

          <div className="col">
            <a href="/article"><h4 className="search-body-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4></a>
            <p className="search-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
        </div>

        <div className="row search-result">
          <div className="col">
            <img src={img1} className="img-fluid" />
          </div>

          <div className="col">
            <a href="/article"><h4 className="search-body-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4></a>
            <p className="search-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
        </div>

        <Route exact path="/article" component={Article} />
      </div>
    </Router>

  );
}

export default searchResult;
