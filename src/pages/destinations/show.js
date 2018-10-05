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
      return (
          <div>
                <img src={img_path} alt={dest_name}/>
                <h1>{dest_name}</h1>
          </div>
      )
    }
}
export default Show
