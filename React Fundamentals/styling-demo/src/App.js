import React, { Component } from 'react'
import './App.css'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'

class App extends Component {
  render() {
    return (
      <div>
        <Stylesheet primary={true} />
        <Inline />
      </div>
    )
  }
}

export default App
