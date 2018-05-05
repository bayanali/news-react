import React, { Component } from 'react';
import './Search.css';
import img1 from '../../images/img1.jpg';

const searchResult = (props) => {
  return (

    <div className="row search-result">
      <div className="col">
        <img src={img1} className="img-fluid" />
      </div>

      <div className="col">
        <h4 className="search-body-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
        <p className="search-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
      </div>
    </div>

  );
}

export default searchResult
