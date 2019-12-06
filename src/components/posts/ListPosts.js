import React from 'react';

const ListPosts = (props) => {
	const postList = props.posts.map((post) => {
		return (
			<li key={post._id}>
				<span><strong>{post.text}</strong></span><br />
				<img src={post.image} /><br />
				<button onClick={props.deletePost.bind(null, post._id)}>Delete</button><br />
				<button onClick={props.showModal.bind(null, post)}>Edit</button><br />
			</li>
			)
	})
	return(
		<div>
		<h2>Posts</h2>
		<ul>
			{postList}
		</ul>
		</div>
		)
}

export default ListPosts;