import React, { Component } from 'react';
import './App.css';
import './CSS/header.css'
import Footer from './components/footer/footer';
import Header from './components/Header/header';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>  
        <Footer/>
      </div>


    );
  }
}

export default App;
