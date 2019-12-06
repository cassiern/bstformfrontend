import React from 'react';

const EditPost = (props) => {

// console.log(props.postToEdit.text, '<-- props in edit posts component')


	return(
		<div>
			<form onSubmit={props.editPosts}>
			<label>Edit Text: </label>
				<input type="text" name="text" onChange={props.handleFormChange} value={props.postToEdit.text}/><br />
			<label>Edit Image: </label>
				<input type="text" name="image" onChange={props.handleFormChange} value={props.postToEdit.image}/><br />
				<button type="submit">Update</button>
			</form>
		</div>
		)
	}

export default EditPost;