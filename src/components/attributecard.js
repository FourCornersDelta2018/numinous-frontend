import React, { Component } from 'react'

class AttributeCard extends Component {


  findIcon = (type, attribute) => {
    if (type==="geography" && attribute==="Sea Cliffs") {
      return `/icons/${type}/coast.svg`
    } else if (type==="geography" && attribute==="Sand Dunes") {
      return `/icons/${type}/dunes.svg`
    } else if (type==="geography" && attribute==="Hot Springs") {
      return `/icons/${type}/hotsprings.svg`
    } else if (type==="experience" && attribute==="Art/Museums") {
      return `/icons/${type}/museum.svg`
    } else if (type==="experience" && attribute==="Spas/Springs") {
      return `/icons/${type}/spa.svg`
    } else if (type==="experience" && attribute==="Urban Exploration") {
      return `/icons/${type}/urbanexploration.svg`
    } else if (type==="experience" && attribute==="Fair/Festival") {
      return `/icons/${type}/festival.svg`
    } else if (type==="experience" && attribute==="Ancient Ruins") {
      return `/icons/${type}/ruins.svg`
    } else if (type==="language") {
      return `/icons/${type}/language.svg`
    } else {
      return `/icons/${type}/${attribute}.svg`
    }
  }

    render() {
        const { type, attribute } = this.props
        let icon_path = this.findIcon(type, attribute)
        let uppercase_icon_path = `https://s3-us-west-2.amazonaws.com/numinous.images${icon_path}`
        let aws_icon_path = uppercase_icon_path.toLowerCase()

        return (

          <div id="attribute-card">
            <div class="circle">
              <img id="attribute-icon" src={aws_icon_path} />
              {attribute}
            </div>
            <div id="textbox">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...
            </div>
          </div>
        )
    }
}

export default AttributeCard;
