import React, { Component } from 'react'

class MyEpic extends Component {
  render() {
      return (
          <div>  `Hello, ${this.props.username}! You are epic!!!`
          </div>
      )
  }
}
export default MyEpic
