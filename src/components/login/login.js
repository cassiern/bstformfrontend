// import React, { Component } from 'react';
// import Main from './Main';


// //had help from this website for backend and frontend authentication... 
// 	//https://medium.com/@faizanv/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0

// class Login extends Component {
// 	constructor(){
// 		super();
// 		this.state = {
// 			currentUser: {
// 				email: '',
// 				password: ''
// 			},
// 		}
// 	}

// 	handleLoginChange = (e) => {
// 		//e.preventDefault();
// 		this.setState({
// 			currentUser: {
// 				[e.currentTarget.name]: e.currentTarget.value

// 			}
// 		})
// 		console.log(this.state, '<-- state after setting it')
// 	}



// 	render(){
// 		return(
// 			<div>
// 				<h2>Login</h2><br />
// 				<form onSubmit={this.loggingIn}>
// 					<input type="email" placeholder="Email" onChange={this.handleLoginChange} name="email" value={this.state.currentUser.email}/><br />
// 					<input type="password" placeholder="Password" onChange={this.handleLoginChange} name="password" value={this.state.currentUser.password}/><br />			
// 					<button type="submit">Login</button><br />		
// 				</form>
// 				<button onClick={this.alreadyAMember}>Not a member?</button>	
// 			</div>
// 			)
// 	}
// }
// export default Login;