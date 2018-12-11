import React, { Component } from 'react'
import './App.css'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Hero heroName="Batman" />
				<Hero heroName="Superman" />
				<ErrorBoundary>
					<Hero heroName="Joker" />
				</ErrorBoundary>
			</div>
		)
	}
}

export default App
