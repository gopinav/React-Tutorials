import React, { Component } from 'react'
import './App.css'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'

class App extends Component {
  render() {
    return (
      <div>
        <Stylesheet primary={true} />
        <Inline />
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div>
    )
  }
}

export default App
