import React, { Component } from 'react'
import './App.css'
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'
import ClassCounterTwo from './components/ClassCounterTwo';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ClassCounterOne />
				<HookCounterOne />
				{/* <ClassCounterTwo></ClassCounterTwo> */}
				{/* <HookCounterTwo></HookCounterTwo> */}
			</div>
		)
	}
}

export default App
