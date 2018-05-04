import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import NavBar from './components/Header/navBar';
import Article from './containers/article/article';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Article/>
        <Footer/>
      </div>


    );
  }
}

export default App;
