import React, { Component } from 'react'

class DestinationCard extends Component {
    render() {
        let {img_path} = this.props.destination
        return(
            <div>
                <img src ={img_path} alt ="picture of destination" />
            </div>
        )
    }
}
export default DestinationCard
