import React, { Component } from 'react';
import CreatedPosts from './posts/CreatePosts';
import EditPosts from './posts/EditPosts';


class Main extends Component{
	constructor(){
		super();
		this.state = {
			posts: [],
			showEditModal: false,
			postToEdit: {
				_id: null,
				text: '',
				image: ''
			}
		}
	}

	componentDidMount = () => {
		this.getPosts();
	}

//fetches posts from Express
	getPosts = async () => {
		try{
			const fetchingPosts = await fetch('http://localhost:9000/posts/', {
				credentials: 'include',
				method: 'GET'
			});
			console.log(fetchingPosts, '<-- fetching posts in get route')
			if(fetchingPosts.status !== 200){
				throw Error('404 from server');
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
		console.log(post, e, '<-- post and target inside of addPost');
		try{
			const createdPost = await fetch('http://localhost:9000/posts/', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(post),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log(createdPost, '<-- post created!');
			if(createdPost.status !== 200){
				throw Error('404 from server')
			}
			const createdPostResponse = await createdPost.json();
			console.log(createdPostResponse.data, '<-- createdPostResponse')

			this.setState({
					text: createdPostResponse.data.text,
					image: createdPostResponse.data.image
			})
			console.log(this.state, '<-- STATE AFTER ADDING POST')

		}catch(err){
			console.log(err, '<-- error in adding a post');
			return err;
		}
	}

	//updating posts
	editPosts = async (postId) => {

	}





	render(){
		return(
			<div>
				<h1>Main Page</h1>
				<CreatedPosts addPost={this.addPost}/> 
				<div>
					<h2>{this.state.text}</h2>
					<img src={this.state.image} />
				</div>

			</div>
		)
	}
}


export default Main;