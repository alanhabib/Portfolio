import React, {useState} from 'react';
import "./Index.scss";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";

function CreatePosts(props) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [blogPost, setBlogPost] = useState({
		title: "",
		content: ""
	});

	const changeHandler = (e) => {
		const {name, value} = e.target;
		setBlogPost(prevPost => {
			return {
				...prevPost,
				[name]: value
			}
		})
	};


	const submitPost = (e) => {
		e.preventDefault();
		props.addPosts(blogPost);
		setBlogPost({
			title: "",
			content: ""
		})
	};

	const expandHandler = () => {
		setIsExpanded(true);
	};

	return (
		<form className="create_blogPost">
			{isExpanded && (
				<input
					onChange={changeHandler}
					name={"title"}
					value={blogPost.title}
					placeholder={"Title"}

				/>
			)}
			<textarea
				placeholder={"Write some stuff..."}
				onClick={expandHandler}
				onChange={changeHandler}
				name={"content"}
				value={blogPost.content}
				rows={isExpanded ? 4 : 1}
			/>
			<Zoom in={isExpanded}>
				<Fab onClick={submitPost} size={"medium"}>
					<AddIcon/>
				</Fab>
			</Zoom>
		</form>
	);
}

export default CreatePosts;
