import React, { Component } from 'react'

class BrokenClick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  render() {
    return (
      <div>
        <h1 />
        <button>Click Me!</button>
      </div>
    )
  }
}

export default BrokenClick
