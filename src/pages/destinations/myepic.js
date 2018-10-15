import React, { Component } from 'react'
import AuthService from '../../services'
import { getSavedDestinations } from '../../api_backend/index.js'
import DestinationCard from '../../components/destinationcard'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';

class MyEpic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            destinations: [],
            username: '',
            destinationInfo: [],
            styling: {
              bigAvatar: {
                width: 200,
                height: 200,
              }
            }
        }
    }

    componentWillMount() {
        let auth = new AuthService()
        let current_user_id = auth.getUserId()
        getSavedDestinations(current_user_id)
        .then(savedDestinationInfo => {
            this.setState({
            username: savedDestinationInfo.user_info.username, destinationInfo: savedDestinationInfo.destination_info })
        })
    }



  render() {
    console.log("STATE");
    console.log(this.state);
      return (
          <div className="myepic">
                <div className="column1">
                 <h2>Welcome, {this.state.username}!</h2>
                <Avatar
                  alt="avatar image"
                  src="/assets/avatar.png"
                  style={this.state.styling.bigAvatar}
                />
                <div id="textbox">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...
                </div>
                </div>
                <div className="column2">
                  <h2>Travel Wishlist</h2>
                 {this.state.destinationInfo.map((destination, index) => {
                    return (
                      <div>
                        <Link to={{pathname:`/destinations/${destination.id}`, state:{id:destination.id}}}>
                            <DestinationCard destination={destination} />
                        </Link>
                      </div>
                    )
                })}

                </div>

                <div className="column3"><h2>Past Destinations</h2>
                </div>
          </div>
      )
  }
}
export default MyEpic
