import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`)
  }

  render() {
    return (
      <div>
        <ChildComponent />
      </div>
    )
  }
}

export default ParentComponent
