import React, { Component } from 'react';
//import './app.css';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import LandingPage from '../LandingPage/index';
import Menu from '../Menu/index';
import Players from '../../components/players/index';
//import Home from '../components/Home/Home';
import { Route } from 'react-router-dom';
import history from '../../history.js';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route path="/play" component={Players} />
        <Footer />
       </div>

    );
  }
}

export default App;
