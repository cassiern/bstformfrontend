import React, { Component } from 'react';

class CreatedPosts extends Component {
	constructor(props){
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
				<input placeholder="Add Text" type="text" name="text" onChange={this.updatePosts} value={this.state.text}/> <br />
				<input placeholder="Add Image URL" type="text" name="image" onChange={this.updatePosts} value={this.state.image}/> <br />
				<button type="button" onClick={this.props.createNewPost}>Close</button>
				<button type="submit">Submit</button>
			</form>
			</div>

			)
	}
}


export default CreatedPosts;