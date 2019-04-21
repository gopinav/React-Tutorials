import React, { Component } from 'react'

class ClassCounterOne extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`
	}

	componentDidUpdate() {
		document.title = `Clicked ${this.state.count} times`
	}

	render() {
		return (
			<div>
				<p>You clicked {this.state.count} times</p>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click me
				</button>
			</div>
		)
	}
}

export default ClassCounterOne
