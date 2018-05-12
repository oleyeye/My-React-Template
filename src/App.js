import React, { Component } from 'react';
import Router from 'router/Router'
import { hot } from 'react-hot-loader'

class App extends Component {
  render() {
    return (
      <Router/>
    );
  }
}

export default hot(module)(App);