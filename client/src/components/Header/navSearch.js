import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Search from '../../containers/Search/Search'
import Footer from '../footer/footer';
import NavBar from '../Header/navBar';

const navSearch = () => {
  return (
    <form action="/search" className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 transparent-search" type="text" placeholder="Search" />
    </form>
  );
};

export default navSearch;
