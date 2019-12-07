import React from 'react';

const EditPost = (props) => {

// console.log(props.postToEdit.text, '<-- props in edit posts component')


	return(
		<div>
			<form onSubmit={props.editPosts}>
			<label className="mainText">Edit Text: </label>
				<input className="firstInputs" type="text" name="text" onChange={props.handleFormChange} value={props.postToEdit.text}/><br />
			<label className="mainText">Edit Image: </label>
				<input className="firstInputs" type="text" name="image" onChange={props.handleFormChange} value={props.postToEdit.image}/><br />
				<button className="closeBtns" type="submit">Update</button>
			</form>
		</div>
		)
	}

export default EditPost;