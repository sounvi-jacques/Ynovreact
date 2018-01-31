import React, { Component } from 'react';
import './App.css';

import Header from './compoments/Header';
import Home from './compoments/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Home />
      </div>
    );
  }
}

export default App;
