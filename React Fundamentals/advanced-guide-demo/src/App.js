import React, { Component } from 'react'
import './App.css'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'

class App extends Component {
	render() {
		return (
			<div className="App">
				<FocusInput />
				{/* <RefsDemo /> */}
				{/* <FragmentDemo />
				<Table /> */}
			</div>
		)
	}
}

export default App
