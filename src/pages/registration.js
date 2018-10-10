import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import AuthService from '../services'
import Navbar from '../components/navbar'

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
			<main>
				<h2>Welcome! Register and create your Epic today!</h2>
				<form onSubmit={this.onSubmit}>
					<input id= "username"
						type="text"
						name="username"
						value={username}
						onChange={this.onChange}
					/>
				<input id = "email"
						type="email"
						name="email"
						value={email}
						onChange={this.onChange}
					/>
					{this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}
					<input id= "password"
						type="password"
						name="password"
						value={password}

						onChange={this.onChange}
					/>
					{this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}
					<button onSubmit={this.onSubmit}>Register</button>
					{this.state.success && <Redirect to="/home"/>}
				</form>

			</main>
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
