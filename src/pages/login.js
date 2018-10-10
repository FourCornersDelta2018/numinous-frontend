import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import AuthService from '../services'
import Navbar from '../components/navbar'

import Button from '@material-ui/core/Button';

class Login extends Component {
    constructor(props) {
        super(props)

        this.auth = new AuthService()
        this.state = {
            success: false,
            user: {
                email: "",
                password: ""
            }
        }
    }

    render() {
        let { email, password } = this.state.user
        return (
            <div>
                <div className="backgroundLogin"></div>
                <main className="login">
                    <h4>Sign in with your email and password to see My Epic:</h4>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        <Button variant="contained" id="button" type="submit">Log In</Button>
                    </form>
                </main>
            </div>
        )
    }

    // track each keystroke, save the value to state
    handleChange = (event) => {
        // copy form from state
        let { user } = this.state

        // copy event target name and value (target will be a form field)
        let fieldName = event.target.name
        let inputValue = event.target.value

        console.log(inputValue, fieldName);

        // update form object with new value from user
        user[fieldName] = inputValue

        this.setState({user})
    }

    // when user submits form,
    handleSubmit = (e) => {
        e.preventDefault()
        // this function requires an email and password
        this.auth.login(this.state)
        .then(json => {
			console.log("handling any errors");
			if(json.errors) {
				this.setState({
					errors: json.errors
				})
			}
			return json
		})
    }
}

export default Login
