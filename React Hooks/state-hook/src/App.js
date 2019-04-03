import React, { Component } from 'react'
import './App.css'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <ClassCounter />
				<HookCounter />
				<HookCounterTwo /> */}
				<HookCounterThree />
			</div>
		)
	}
}

export default App
