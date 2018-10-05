import React, { Component } from 'react'

class DestinationCard extends Component {
    render() {
        let {dest_name, img_path} = this.props.destination

        return(
            <div>
                <img src ={img_path} alt = {dest_name} />
            </div>
        )
    }
}
export default DestinationCard
