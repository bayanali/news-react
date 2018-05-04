import React, { Component } from 'react';
import './App.css';
import './CSS/header.css'
import Footer from './components/footer/footer';
import NavBar from './components/Header/navBar';
import Article from './containers/article/article';
import Header from './components/Header/header';


class App extends Component {
  render() {
    return (
      <div>

        <Article/>

        <Footer/>
      </div>


    );
  }
}

export default App;
