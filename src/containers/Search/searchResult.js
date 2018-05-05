import React, { Component } from 'react';
import './Search.css';
import img1 from '../../images/img1.jpg';

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
    <div id="display-results" className="container">
      <div className="row search-result">
        <div className="col">
          <img src={results[0].img} className="img-fluid" />
        </div>

        <div className="col">
          <h4 className="search-body-title">{results[0].title}</h4>
          <p className="search-body">{results[0].body}</p>
        </div>
      </div>

      <hr className="hrstyle-light" />

      <div className="row search-result">
        <div className="col">
          <img src={results[1].img} className="img-fluid" />
        </div>

        <div className="col">
          <h4 className="search-body-title">{results[1].title}</h4>
          <p className="search-body">{results[1].body}</p>
        </div>
      </div>

      <hr className="hrstyle-light" />

      <div className="row search-result">
        <div className="col">
          <img src={results[2].img} className="img-fluid" />
        </div>

        <div className="col">
          <h4 className="search-body-title">{results[2].title}</h4>
          <p className="search-body">{results[2].body}</p>
        </div>
      </div>

      <hr className="hrstyle-light" />

      <div className="row search-result">
        <div className="col">
          <img src={results[3].img} className="img-fluid" />
        </div>

        <div className="col">
          <h4 className="search-body-title">{results[3].title}</h4>
          <p className="search-body">{results[3].body}</p>
        </div>
      </div>

      <hr className="hrstyle-light" />

      <div className="row search-result">
        <div className="col">
          <img src={results[4].img} className="img-fluid" />
        </div>

        <div className="col">
          <h4 className="search-body-title">{results[4].title}</h4>
          <p className="search-body">{results[4].body}</p>
        </div>
      </div>

      <hr className="hrstyle-light" />

      <div className="row search-result">
        <div className="col">
          <img src={results[5].img} className="img-fluid" />
        </div>

        <div className="col">
          <h4 className="search-body-title">{results[5].title}</h4>
          <p className="search-body">{results[5].body}</p>
        </div>
      </div>
      <hr className="hrstyle-light" />
    </div>
  );
}

export default searchResult
