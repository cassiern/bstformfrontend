import React, { Component } from 'react';
import CreatedPosts from './CreatePosts';


class Main extends Component{
	constructor(){
		super();
		this.state = {
			posts: []
		}

	// componentDidMount(){
	// 	this.getPosts();
	// }
}

//fetches posts from Express backend
	getPosts = async () => {
		try{
			const fetchingPosts = await fetch('http://localhost:9000/', {
				credentials: 'include',
				method: 'GET'
			});
			console.log(fetchingPosts, '<-- fetching posts in get route')
			if(fetchingPosts.status !== 200){
				throw Error('404 frorm server');
			}
			const postsResponse = await fetchingPosts.json();
			console.log(postsResponse, '<-- post response');
			this.setState({
				posts: [...postsResponse.data]
			})
		}catch(err){
			console.log(err, '<-- error in getPosts')
		}
	}

//creating posts and sending it to Express
	addPost = async (post, e) => {
		e.preventDefault();
		console.log(post, e, '<-- post and target inside of addPost')
	}


	render(){
		return(
			<div>
				<h1>Main Page</h1>
				<CreatedPosts addPost={this.addPost}/> 
				<ul>
					{this.state.posts}
				</ul>
			</div>
		)
	}
}


export default Main;