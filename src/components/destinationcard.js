import React, { Component } from 'react'

class DestinationCard extends Component {
    render() {
      console.log(this.props);
        const { destination } = this.props
        const { dest_name, img_path } = destination
        let aws_img_path = `https://s3-us-west-2.amazonaws.com/numinous.images/images${img_path}`
        return (
            <div style={{padding: "1rem"}}>
                <img className="card"src={aws_img_path} alt={dest_name} />
            </div>
        )
    }
}

export default DestinationCard
