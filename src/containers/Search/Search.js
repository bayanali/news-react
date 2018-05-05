import React, { Component } from 'react';
import './Search.css';
import SearchTitle from './searchTitle'
import SearchResult from './searchResult'
import Pagination from './pagination'
import img1 from '../../images/img1.jpg';

export default class Search extends Component {
  render() {

    return (
      <div id="display-results">
        <div className="container">

            <SearchTitle />
            <hr className="hrstyle" />

            {/* a total of 6 search results are displayed here */}

            <SearchResult />
            <hr className="hrstyle-light" />

            <SearchResult />
            <hr className="hrstyle-light" />

            <SearchResult />
            <hr className="hrstyle-light" />

            <SearchResult />
            <hr className="hrstyle-light" />

            <SearchResult />
            <hr className="hrstyle-light" />

            <SearchResult />
            <hr className="hrstyle-light" />

            {/* pagination goes here */}

            <Pagination />

            <br /><br />
          </div>
        </div>

    );
  }
}

