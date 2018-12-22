import React, { Component } from 'react'

class HoverCounter extends Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	incrementCount = () => {
		this.setState(prevState => {
			return { count: prevState.count + 1 }
		})
	}

	render() {
		const { count } = this.state
		return <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
	}
}

export default HoverCounter
