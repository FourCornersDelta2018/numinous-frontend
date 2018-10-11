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
            console.log(savedDestinationInfo);
            this.setState({destinations: savedDestinationInfo.destination_user,
            username: savedDestinationInfo.user_info.username, destinationInfo: savedDestinationInfo.destination_info })
        })
    }



  render() {
    console.log("STATE", this.state);
      return (
          <container>
                <div className="column1">
                 <h2>Welcome, {this.state.username}!</h2>
                <Avatar
                  alt="Adelle Charles"
                  src="/assets/avatar.png"
                  style={this.state.styling.bigAvatar}
                />
                </div>

                <div className="column2"><h2>This is where you would go if you were not broke!</h2>
                {this.state.destinationInfo.map((destination, index) => {
                    return (
                        <Link to={{pathname:`/destinations/${destination.id}`, state:{id:destination.id}}}>
                            <DestinationCard destination={destination} />
                        </Link>
                    )
                })}

                </div>

                <div className="column3"><h2>I am wee little icebox column</h2>
                </div>
          </container>
      )
  }
}
export default MyEpic
