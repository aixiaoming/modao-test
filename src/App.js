import React, { Component } from 'react';
import './App.scss';
import Container from './list/container/container.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Container></Container>
      </div>
    );
  }
}

export default App;
