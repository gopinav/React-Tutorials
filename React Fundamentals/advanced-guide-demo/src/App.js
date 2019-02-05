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
import ParentComp from './components/ParentComp'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import Counter from './components/Counter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext'

class App extends Component {
	render() {
		return (
			<div className="App">
					<ComponentC />
				{/* <Counter
					render={(count, incrementCount) =>
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</ClickCounterTwo>}>
				</Counter>
				<Counter
					render={(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}>
				</Counter> */}
				{/* <ClickCounter name='Vishwas' /> */}
				{/* <HoverCounter /> */}
				{/* <ParentComp /> */}
				{/* <Hero heroName="Batman" />
				<Hero heroName="Superman" />
				<ErrorBoundary>
					<Hero heroName="Joker" />
				</ErrorBoundary> */}
			</div>
		)
	}
}

export default App
