import React, { Component } from 'react';
import './Search.css';
import SearchTitle from './searchTitle'
import SearchResult from './searchResult'
import Pagination from './pagination'

export default class Search extends Component {
  render() {

    return (
      <div id="display-search-results">
        <div className="container">
            <SearchTitle />
            <SearchResult />            
            <Pagination />
          </div>
        </div>
    );
  }
}

