import React, { Component } from 'react';
import Main from './Main';


//had help from this website for backend and frontend authentication... 
	//https://medium.com/@faizanv/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0

class Auth extends Component {
	constructor(){
		super();
		this.state = {
			isLogged: false,
			isMember: false,
			currentUser: {
				email: '',
				password: ''
			}
		}
	}

	//Not DRY code but will work on it at a later time!
	handleRegisterChange = (e) => {
		//e.preventDefault();
		this.setState({
			currentUser: {
				[e.currentTarget.name]: e.currentTarget.value

			}
		})
		console.log(this.state, '<-- state after setting it')
	}
	handleLoginChange = (e) => {
		//e.preventDefault();
		this.setState({
			currentUser: {
				[e.currentTarget.name]: e.currentTarget.value

			}
		})
		console.log(this.state, '<-- state after setting it')
	}

	loggingIn = (e) => {
		e.preventDefault();
		console.log('this is the login')
		this.setState({
			isLogged: true
		})
	}


	registeringUser = async (e) => {
		e.preventDefault();
		try{
		const newUser = await fetch('http://localhost:9000/user/register', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state.currentUser),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		console.log(newUser, '<-- USER CREATED');
		if(newUser.status !== 200){
			throw Error('something went wrong in register route')
		}else{
			const createUserResponse = await newUser.json();
			console.log(createUserResponse, '<-- server response')
			this.setState({
				currentUser: {
					email: newUser.email,
					password: newUser.password
				},
				isLogged: true
			})
		}
		}catch(err){
			return(err)
		}
	}
	alreadyAMember = () => {
		this.setState({
			isMember: !this.state.isMember
		})
	}

	render(){
		return(
			<div>
		{!this.state.isMember ? 
		<div>	
			<h2>Register</h2><br />
			<form onSubmit={this.registeringUser}>
				<input type="email" placeholder="Email" onChange={this.handleRegisterChange} name="email" value={this.state.currentUser.email}/><br />
				<input type="password" placeholder="Password" onChange={this.handleRegisterChange} name="password" value={this.state.currentUser.password} /><br />		
				<button>Register</button>
			</form>
			<button onClick={this.alreadyAMember}>Already a member?</button>
			</div>
			:
			<div>
			<h2>Login</h2><br />
			<form onSubmit={this.loggingIn}>
				<input type="email" placeholder="Email" onChange={this.handleLoginChange} name="email" value={this.state.currentUser.email}/><br />
				<input type="password" placeholder="Password" onChange={this.handleLoginChange} name="password" value={this.state.currentUser.password}/><br />			
				<button type="submit">Login</button><br />		
			</form>
			<button onClick={this.alreadyAMember}>Not a member?</button>
			</div>
		}
			
			{this.state.isLogged ? <Main /> : null }
			
			</div>
			)
	}
}
export default Auth;