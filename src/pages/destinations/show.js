import React, { Component } from 'react'
import { getDestination, createDestinationUser, unsaveDestination } from '../../api_backend/index.js'
import AuthService from '../../services'
import AttributeCard from '../../components/attributecard'

class Show extends Component {
    constructor(props) {
        super(props)
        let auth = new AuthService()
        this.state = {
            destination: {},
            geography: '',
            experience: '',
            language: '',
            newDestinationUserSuccess: false,
            unsaveDestinationSuccess: false,
            user_id: "",
            destination_id: "",
            isLoggedIn: auth.loggedIn()        }
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

    saveHandleClick = (e) => {
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

    unsaveHandleClick = (e) => {
        e.preventDefault()
        console.log("unsaveDestination try", this.state.user_id, this.state.destination_id);
        let user_id = this.state.user_id
        let destination_id = this.state.destination_id
        unsaveDestination({user_id, destination_id})
        .then(unsaveDestination => {
            console.log("UnsaveSuccess", unsaveDestination);
            this.setState({
                unsaveDestinationSuccess: true
            })
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let { destination, geography, experience, language } = this.state
        let {dest_name, region, country, img_path} = destination
        let location = `${region}, ${country}`
        let googleMapURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBigtkQJamzueDT0qt3DZfBjDqqrTWhmOI&q=${dest_name}+${region}+${country}`

        return (
          <div className="flex-column">
            <div className="background" style={{backgroundImage:`url(${img_path})`}}>
                <arrow-down class="bounce">
                  <img width="40" height="40" src="/assets/icon-arrow_dropdown.svg" alt="Down Arrow" />
                </arrow-down>
            </div>
            <div id="attribute-section" className="flex-column" style={{alignItems: "center"}}>
              <h1 style={{marginBottom: "0"}}>{dest_name}</h1>
              <h4 style={{marginBottom: "2rem"}}>{location}</h4>
              <div id="attribute-row">
                <AttributeCard type="geography" attribute={geography}/>
                <AttributeCard type="experience" attribute={experience}/>
                <AttributeCard type="language" attribute={language}/>
              </div>
            </div>
                {isLoggedIn ? (
                    <div>
                        <button type="submit" onClick={this.saveHandleClick}>Save to My Epic</button>
                        <button type="submit" onClick={this.unsaveHandleClick}>Remove from My Epic </button>
                    </div>
                ) : (<div></div>) }
                <iframe id="map" src={googleMapURL} allowfullscreen></iframe>
          </div>
      )
    }
}
export default Show
