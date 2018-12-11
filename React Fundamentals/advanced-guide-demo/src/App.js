import React, { Component } from 'react'
import './App.css'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'

class App extends Component {
	render() {
		return (
			<div className="App">
				<PortalDemo />
			</div>
		)
	}
}

export default App
