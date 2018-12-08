import React, { Component } from 'react'
import './App.css'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'

class App extends Component {
	render() {
		return (
			<div className="App">
				<FRParentInput />
				{/* <FocusInput /> */}
				{/* <RefsDemo /> */}
				{/* <FragmentDemo />
				<Table /> */}
			</div>
		)
	}
}

export default App
