import React, { Component } from 'react'

class DestinationCard extends Component {
    render() {
        const { destination } = this.props
        const { dest_name, img_path } = destination
        return (
            <div style={{padding: "1rem"}}>
                <img className="card"src={img_path} alt={dest_name} />
            </div>
        )
    }
}

export default DestinationCard
