import React, { Component } from 'react'
import Input from './Input';

class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }

  clickHandler = () => {
    console.log(this.componentRef.current)
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <Input ref={this.componentRef}></Input>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
