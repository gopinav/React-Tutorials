import React, { Component } from 'react'
import './App.css'
import Greet from './components/Greet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" heroName="Batman" />
        <Greet name="Clark" heroName="Superman" />
        <Greet name="Diana" heroName="Wonder Woman" />
      </div>
    )
  }
}

export default App
