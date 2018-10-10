import React, { Component } from 'react'

class AttributeCard extends Component {
    render() {
        const { attribute } = this.props

        return (
          <div>
            <div class="circle">{attribute}</div>
            <div id="textbox">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...
            </div>
          </div>
        )
    }
}

export default AttributeCard;
