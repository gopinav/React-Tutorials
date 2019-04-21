import React, { Component } from 'react'
import './App.css'
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'

class App extends Component {
	render() {
		return (
			<div className="App">
				<ClassCounterOne />
				<HookCounterOne />
			</div>
		)
	}
}

export default App
