import React, { Component } from 'react';


class Profile extends Component{
	constructor(props){
		super(props);
		this.state = {
		isLogged: Boolean,
		currentUser: {},
		showProfile: Boolean
		}
	}
componentDidMount(props){
	this.setUpProfile(props)
}

setUpProfile = (props) => {
	this.setState({
		currentUser: this.props.currentUser
	})
}

	render(){
		return(
			<div>
				<h1>Hello from a Profile</h1>
			</div>

			)
	}
}

export default Profile;