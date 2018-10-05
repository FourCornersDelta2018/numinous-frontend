import React, { Component } from 'react'
import { getDestination } from '../../api_backend/index.js'

class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            destination: {}
        }
    }
    componentWillMount() {
        const id = this.props.match.params.id
        getDestination(id)
        .then(destinationInfo => {
            this.setState({destination:destinationInfo})
        })
    }
    render() {
        let {dest_name, region, country, img_path} = this.state.destination
        let googleMapURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBigtkQJamzueDT0qt3DZfBjDqqrTWhmOI&q=${dest_name}+${region}+${country}`
        return (
          <div>
            <div id="destinationShow">
                <img src={img_path} alt={dest_name}/>
            </div>
                <h1>{dest_name}</h1>
                <h4>{region}</h4>
                <h4>{country}</h4>
                <iframe id="map" src={googleMapURL} allowfullscreen></iframe>
          </div>
      )
    }
}
export default Show
