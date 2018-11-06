import React, { Component } from 'react';
import './App.css';
import Stylesheet from './components/Stylesheet';

class App extends Component {
  render() {
    return (
      <div>
        <Stylesheet primary={true} />
      </div>
    );
  }
}

export default App;
