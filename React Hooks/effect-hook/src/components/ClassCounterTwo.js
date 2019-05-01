import React, { Component } from 'react'

class ClassCounterTwo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0
		}
	}

	componentDidMount() {
		window.addEventListener('mousemove', e =>
			this.setState({ x: e.clientX, y: e.clientY })
		)
	}

	render() {
    return <div>X - {this.state.x} Y - {this.state.y}</div>
	}
}

export default ClassCounterTwo
