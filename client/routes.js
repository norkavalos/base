import React, { Component } from 'react';
// import {connect} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Navbar, MainPage } from './components';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Navbar} />
        <Route path="/" component={MainPage} />
      </div>
    );
  }
}

export default Routes;
