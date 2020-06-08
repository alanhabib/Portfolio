import React, {useState} from "react";
import "./Index.scss";
import CreatePosts from "./CreatePosts";
import BlogPost from "./BlogPost";

const Index = (props) => {
	const [posts, setPosts] = useState([]);

	const addPostHandler = (newPost) => {
		setPosts(prevPost => {
			return [...prevPost, newPost]
		})
	};

	const deletePostHandler = (id) => {
		setPosts(prevPosts => {
			return prevPosts.filter((item, index) => {
				return index !== id;
			})
		})
	};

	return (
		<div className="blogContainer">
			<CreatePosts addPosts={addPostHandler}/>
			{posts.map((post, index) => (
				<BlogPost
					key={index}
					delete={deletePostHandler}
					id={index}
					title={post.title}
					content={post.content}
				/>
			))}
		</div>
	)
};

export default Index;
