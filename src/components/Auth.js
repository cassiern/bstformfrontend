import React, { Component } from 'react';
import Main from './Main';


class Auth extends Component {
	constructor(){
		super();
		this.state = {
			isLogged: false,
			email: '',
			password: ''
		}
	}

	render(){
		return(
			<div>
			<h1>Welcome from login</h1>

			{this.state.isLogged ? <Main /> : null }
			</div>
			)
	}
}
export default Auth;