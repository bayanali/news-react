// node modules
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// css files
import './App.css';
import './CSS/header.css';

// local imports
import Footer from './components/footer/footer';
import NavBar from './components/Header/navBar';
import Article from './containers/article/article';
import Header from './components/Header/header';
import NotFound from './containers/Error/NotFound';
import Home from './containers/Home/Home';
import Style from './containers/Style/Style';
import InternalServer from './containers/Error/InternalServer';
import Search from './containers/Search/Search';

class App extends Component {
  render() {
    let black = {background: '#000', height: '113px'};
    let transparent = {background: '', height: '113px'};
    return (
      <Router>
          <div>
              <Route exact path="/" render={() => <div> <NavBar color={transparent}/> <Home/> </div>} />
              <Route path="/style" render={() => <div> <NavBar color={transparent}/> <Style/> </div>} />
              <Route path="/article" render={() => <div> <NavBar color={transparent}/> <Article/> </div>} />
              <Route path="/not-found" render={() => <div><NavBar color={black}/> <NotFound/> </div>} />
              <Route path="/search" render={() => <div><NavBar color={black}/> <Search/> </div>} />
              <Route path="/internal-server-error" render={() => <div><NavBar color={black}/> <InternalServer/> </div>} />
            <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;
