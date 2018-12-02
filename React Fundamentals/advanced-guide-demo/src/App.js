import React, { Component } from 'react'
import './App.css'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import RefsDemo from './components/RefsDemo'

class App extends Component {
	render() {
		return (
			<div className="App">
				<RefsDemo />
				{/* <FragmentDemo />
				<Table /> */}
			</div>
		)
	}
}

export default App
