import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Link
} from 'react-router-dom';
//import App from '../../App';
import '../../public/style.css';
import Profile from '../users/Profile';

class Navbar extends Component{
	constructor(props){
		super();
		this.state = {
			showProfile: false
		}
	}

	// showProfile = () => {
	// 	this.setState({
	// 		showProfile: true
	// 	})

	// }




render(props){
	return(
		<div className="navbar-container">

			<a href="http://localhost:3000" className="logout" onClick={props.logout}>Logout</a>
			<a href="#" className="Profile" onClick={props.showProfile}>Profile</a>
		</div>

		{this.state.showProfile ? 
			<Profile />
			:
			null
		}
		

		</div>
		)
}
}
export default Navbar;