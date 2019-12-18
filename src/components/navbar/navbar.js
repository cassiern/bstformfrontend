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
		<Router>
			<Link to="/" className="logout" onClick={this.props.logout}>Logout</Link>
			<Link to="/profile" className="profile" onClick={() => this.setState({ showProfile: !this.state.showProfile})}>Profile</Link>
			<Link to="/home" className="home" onClick={() => {console.log('home clicked')}} />
		</Router>

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