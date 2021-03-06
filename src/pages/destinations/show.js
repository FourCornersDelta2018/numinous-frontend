import React, { Component } from 'react'
import { getDestination, createDestinationUser, unsaveDestination } from '../../api_backend/index.js'
import AuthService from '../../services'
import AttributeCard from '../../components/attributecard'
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'

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
        const id = this.props.match.params.id
        getDestination(id)
        .then(destinationInfo => {
          let {destination, geography, experience, language} = destinationInfo
          console.log("Response");
          console.log(destinationInfo);
            this.setState({user_id:current_user_id, destination_id:id, destination:destination, geography:geography.geography, experience:experience.experience, language:language.language})
        })
        window.scrollTo(0, 0)
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
            alert("Destination Saved!")
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
            alert("Destination Removed!")
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let { destination, geography, experience, language} = this.state
        let {dest_name, region, country, img_path, description} = destination
        let aws_img_path = `https://s3-us-west-2.amazonaws.com/numinous.images/images/${img_path}`
        let location = `${region}, ${country}`
        let googleMapURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBigtkQJamzueDT0qt3DZfBjDqqrTWhmOI&q=${dest_name}+${region}+${country}`

        return (
          <div className="flex-column" style={{flex: "1"}}>
            <div className="background" style={{backgroundImage:`url(${aws_img_path})`}}>
                <h1 id="showtitle">{dest_name}</h1>
                <arrow-down class="bounce">
                  <img width="40" height="40" src="/assets/icon-arrow_dropdown.svg" alt="Down Arrow" />
                </arrow-down>
            </div>
            <div id="attribute-section" className="flex-column" style={{alignItems: "center"}}>
              <h1 id="attribute-title">{dest_name}</h1>
              <h4 id="attribute-location">{location}</h4>
              <p id="location-description">{description}</p>
              <div id="attribute-row">
                <AttributeCard type="geography" attribute={geography}/>
                <AttributeCard type="experience" attribute={experience}/>
                <AttributeCard type="language" attribute={language}/>
              </div>
            </div>
                {isLoggedIn ? (
                    <div className="flex-row" style={{paddingBottom: "2rem"}}>
                        <Button variant="contained" id="button" type="submit" onClick={this.saveHandleClick}>Save to My Epic</Button>
                        {this.state.newDestinationUserSuccess && <Redirect to='/myepic' /> }

                        <Button variant="contained" id="button" type="submit" onClick={this.unsaveHandleClick}>Remove from My Epic </Button>
                          {this.state.unsaveDestinationSuccess  && <Redirect to='/myepic' /> }



                  </div>
                ) : (<div></div>) }
                <iframe id="map" src={googleMapURL} allowfullscreen></iframe>
          </div>
      )
    }
}
export default Show
