import React, { Component } from 'react';
//import './app.css';
import Header from '../../components/header/index';
import LandingPage from '../LandingPage/index';
import RegisterForm from '../RegisterForm/index';
//import Home from '../components/Home/Home';
import { Route } from 'react-router-dom';
import history from '../../history.js';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route path="/form" component={RegisterForm} />
       </div>

    );
  }
}

export default App;
