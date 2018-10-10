import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import AuthService from '../services'
import Navbar from '../components/navbar'

import Button from '@material-ui/core/Button';

class RegistrationPage extends Component {
	constructor(props) {
		super(props)

		this.auth = new AuthService()
		this.state = {
			errors: "",
			success: false,
			form: {
				user: {
					username: "test",
					email: "test@example.com",
					password: "123134",
				}
			}
		}
	}

	render() {
		let { username, email, password } = this.state.form.user
		return (
			<div>
				<div className="backgroundRegister"></div>
				<main className="register">
					<h4>Welcome! Sign up here to create your own My Epic page:</h4>
					<form onSubmit={this.onSubmit}>
						<input
							type="text"
							name="username"
							value={username}
							onChange={this.onChange}
						/>
						<input
							type="email"
							name="email"
							value={email}
							onChange={this.onChange}
						/>
						{this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}
						<input
							type="password"
							name="password"
							value={password}

							onChange={this.onChange}
						/>
						{this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}
						<Button variant="contained" id="button" type="submit" onSubmit={this.onSubmit}>Register</Button>
						{this.state.success && <Redirect to="/pages/destinations/myepic"/>}
					</form>
				</main>
			</div>
		)
	}

	onChange = (e) => {
		let { form } = this.state

		form.user[e.target.name] = e.target.value

		this.setState({ form })
	}


	onSubmit = (e) => {
		e.preventDefault()
		let hasNumber = /\d/
		let {email, password} = this.state.form.user
		console.log(password);
		if (password.length < 6) {
			alert ("Password must have at least six characters, jerk!")
		} else if(!hasNumber.test(password)) {
			alert ("Password must have a number, jerk!")
		} else if(password === email) {
			alert ("Password cannot be email, jerk!")
		}

		this.auth.register(this.state.form)
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
			}
			return json
		})
	}
}

export default RegistrationPage
