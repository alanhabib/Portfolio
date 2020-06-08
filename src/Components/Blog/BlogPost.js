import React from 'react';
import "./Index.scss";
import DeleteIcon from "@material-ui/icons/Delete";


function BlogPost(props) {
	return (
		<div className="blogPost">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button onClick={() => {
				props.delete(props.id)
			}}>
				<DeleteIcon/>
			</button>
		</div>
	);
}

export default BlogPost;
