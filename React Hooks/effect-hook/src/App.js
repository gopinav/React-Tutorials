import React, { Component } from 'react'
import './App.css'
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <ClassCounterOne /> */}
				{/* <HookCounterOne /> */}
				{/* <ClassMouse></ClassMouse> */}
				{/* <HookMouse></HookMouse> */}
				<MouseContainer />
			</div>
		)
	}
}

export default App
