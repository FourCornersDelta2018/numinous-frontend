// import React from 'react'
//
// const DestinationCard = (props) => ({
//     const { img_path, dest_name } = props.destination
//
//     return (
//         <div>
//             <img src={img_path} alt={dest_name} />
//         </div>
//     )
// })

import React, { Component } from 'react'

class DestinationCard extends Component {
    render() {
        const { destination } = this.props
        const { dest_name, img_path } = destination

        return (
            <div>
                <img className="card"src={img_path} alt={dest_name} />
            </div>
        )
    }
}

export default DestinationCard
