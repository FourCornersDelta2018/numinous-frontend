import React, { Component } from 'react'

class MyEpic extends Component {
  render() {
      return (
          <container>
                <div className="column1">`Hello, ${this.props.username}! You are epic!!!`
                </div>
                <div className="column2">This is where you would go if you were not broke!
                </div>
                <div className="column3">I am wee little icebox column
                </div>
          </container>
      )
  }
}
export default MyEpic
