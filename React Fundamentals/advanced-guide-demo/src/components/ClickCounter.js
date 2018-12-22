import React, { Component } from 'react'

class ClickCounter extends Component {
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
    return <button onClick={this.incrementCount}>Clicked {count} times</button>
	}
}

export default ClickCounter
