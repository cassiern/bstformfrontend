import React, { Component } from 'react';

class CreatedPosts extends Component {
	constructor(){
		super();
		this.state = {
			text: '',
			image: ''
		}
	}
	updatePosts = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	render(){
		return(
			<div>
			<form onSubmit={this.props.addPost.bind(null, this.state)}>
				<input placeholder="What would you like to say?" type="text" name="text" onChange={this.updatePosts} value={this.state.text}/> <br />
				<input placeholder="Add Image" type="text" name="image" onChange={this.updatePosts} value={this.state.image}/> <br />
				<button type="submit">Submit</button>
			</form>
			<img src={this.state.image} alt="Image"/>
			<h2>{this.state.text}</h2> 
			</div>

			)
	}
}


export default CreatedPosts;