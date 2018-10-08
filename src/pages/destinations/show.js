import React, { Component } from 'react'
import { getDestination, createDestinationUser } from '../../api_backend/index.js'
import AuthService from '../../services'

class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            destination: {},
            geography: '',
            experience: '',
            language: '',
            newDestinationUserSuccess: false,
            user_id: "",
            destination_id: ""

        }
    }
    grabUserId = () => {
        let auth = new AuthService()
        if (auth.loggedIn()) {
            return auth.getUserId()
        } else {
            return "guest"
        }
    }

    componentWillMount() {
        let auth = new AuthService()
        let current_user_id = this.grabUserId()
        console.log(current_user_id);
        const id = this.props.match.params.id
        getDestination(id)
        .then(destinationInfo => {
            console.log(current_user_id);
            this.setState({user_id:current_user_id, destination_id:id, destination:destinationInfo.destination, geography:destinationInfo.geography.geography, experience:destinationInfo.experience.experience, language:destinationInfo.language.language})
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log("newDestinationUser try", this.state.user_id, this.state.destination_id);
        let user_id = this.state.user_id
        let destination_id = this.state.destination_id
        createDestinationUser({user_id, destination_id})
        .then(successDestinationUser => {
            console.log("CreateSuccess", successDestinationUser);
            this.setState({
                newDestinationUserSuccess: true
            })
        })
    }

    render() {
        console.log(this.state.newDestinationUser);
        let { destination, geography, experience, language } = this.state
        let {dest_name, region, country, img_path} = destination
        let googleMapURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBigtkQJamzueDT0qt3DZfBjDqqrTWhmOI&q=${dest_name}+${region}+${country}`
        return (
          <div>
            <div id="destinationShow">
                <img src={img_path} alt={dest_name}/>
            </div>
                <h1>{dest_name}</h1>
                <h4>{region}</h4>
                <h4>{country}</h4>
                <h4>{geography}</h4>
                <h4>{experience}</h4>
                <h4>{language}</h4>
                <button type="submit" onClick={this.handleClick}>Save</button>
                <iframe id="map" src={googleMapURL} allowfullscreen></iframe>
          </div>
      )
    }
}
export default Show
