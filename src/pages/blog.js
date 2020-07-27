import React, {Fragment, useState, useEffect} from "react";
import axios from "axios";
import PlayerForm from "../Components/NewestBlogComp/playerForm";
import BlogPostListPage from "../Components/NewestBlogComp/BlogPostListPage";
import Form from "../Components/Form";
import Header from "../Components/Header";

function Blog({match}) {
	const id = match.params.id;
	const [blogPosts, setBlogPosts] = useState([]);

	useEffect(() => {
		fetchData();
	}, [id]);

	const fetchData = async () => {
		const url = "http://localhost:4000/blogger";
		const response = await fetch(url);
		const blogPosts = await response.json();
		setBlogPosts(blogPosts);
	};

	const deletePost = (id) => {
		axios.delete(`http://localhost:4000/blogger/${id}`)
			.then(() => {
				const blogPosts = blogPosts.filter(post => post._id !== id);
				setBlogPosts(blogPosts)
			})
	};

	return (
		<Fragment>
			<Header
				title={"my Blog..."}
				rightContent={<BlogPostListPage
					deletePost={deletePost}
					blogPosts={blogPosts}
				/>}
				leftColumnTitle={"Read, learn & blog about it!"}
				lefttColumnText={
					"This is a blog about my everyday as a developer. Read, like or maybe even comment!"
				}
			/>
			<PlayerForm/>
		</Fragment>
	)
}

export default Blog;
