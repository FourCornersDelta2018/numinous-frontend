import React, { Component } from 'react'

class AttributeCard extends Component {


  findIcon = (type, attribute) => {
    if (type==="geography" && attribute==="Sea Cliffs") {
      return `/assets/icons/${type}/coast.svg`
    } else if (type==="geography" && attribute==="Sand Dunes") {
      return `/assets/icons/${type}/dunes.svg`
    } else if (type==="geography" && attribute==="Hot Springs") {
      return `/assets/icons/${type}/hotsprings.svg`
    } else if (type==="experience" && attribute==="Art/Museums") {
      return `/assets/icons/${type}/museum.svg`
    } else if (type==="experience" && attribute==="Spas/Springs") {
      return `/assets/icons/${type}/spa.svg`
    } else if (type==="experience" && attribute==="Urban Exploration") {
      return `/assets/icons/${type}/urbanexploration.svg`
    } else if (type==="experience" && attribute==="Fair/Festival") {
      return `/assets/icons/${type}/festival.svg`
    } else if (type==="experience" && attribute==="Ancient Ruins") {
      return `/assets/icons/${type}/ruins.svg`
    } else if (type==="language") {
      return `/assets/icons/${type}/language.svg`
    } else {
      return `/assets/icons/${type}/${attribute}.svg`
    }
  }

    render() {
        const { type, attribute } = this.props
        let icon_path = this.findIcon(type, attribute)

        return (
          <div id="attribute-card">
            <div class="circle">
              <img id="attribute-icon" src={icon_path} />
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
