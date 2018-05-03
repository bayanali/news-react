import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import NavBar from './components/Header/navBar';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Footer/>
      </div>


    );
  }
}

export default App;
