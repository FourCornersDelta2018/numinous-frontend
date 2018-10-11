import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import AuthService from '../services'
import Navbar from '../components/navbar'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    constructor(props) {
        super(props)

        this.auth = new AuthService()
        this.state = {
            success: false,
            user: {
                email: "",
                password: ""
            },
            styling: {
              container: {
                display: 'flex',
                flexWrap: 'wrap',
              },
              textField: {
                width: 200
              }
            }
        }
    }

    render() {
        let { email, password } = this.state.user
        return (
            <div>
                <div style={this.state.styling.container} id="backgroundLogin"></div>
                <main className="login">
                    <h4>Sign in with your email and password to see My Epic:</h4>
                    <form className="flex-column" onSubmit={this.handleSubmit}>
                        <TextField className={this.state.styling.textField}
                          id="standard-with-placeholder"
                          label="Email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={this.handleChange}
                        />
                        <TextField className={this.state.styling.textField}
                          id="standard-with-placeholder"
                          label="Password"
                          name="password"
                          type="password"
                          value={password}
                          onChange={this.handleChange}
                        />
                        <Button variant="contained" id="button" type="submit">Log In</Button>
                        {this.state.success && <Redirect to="/myepic" />}
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
			} else {
				this.setState({
					success: true
				})
        this.props.history.push('/myepic')
			}
			return json
		})
    }
}

export default Login
