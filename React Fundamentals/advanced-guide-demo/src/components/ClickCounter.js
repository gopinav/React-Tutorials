import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

  render() {
    const { count, incrementCount } = this.props
		return <button onClick={incrementCount}>{this.props.name } Clicked {count} times</button>
	}
}

export default withCounter(ClickCounter, 5)
