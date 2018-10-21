import React, { Component } from 'react'

class ParentComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
       parentName: 'Parent'
    }

    this.greetParent=this.greetParent.bind(this)
  }

  greetParent(){
    alert(`Hello ${this.state.parentName}`)
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default ParentComponent
