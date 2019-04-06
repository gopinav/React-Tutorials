import React, { Component } from 'react'
import './App.css'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import ClassCounterTwo from './components/ClassCounterTwo'
import HookCounterFour from './components/HookCounterFour'

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <ClassCounter />
				<ClassCounterTwo />
				<HookCounter />
				<HookCounterTwo />
				<HookCounterThree /> */}
				<HookCounterFour />
			</div>
		)
	}
}

export default App
