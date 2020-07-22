import React, { useState, useEffect} from "react";
import axios from "axios";
import PlayerForm from "../Components/NewestBlogComp/playerForm";
import BlogPostListPage from "../Components/NewestBlogComp/BlogPostListPage";

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
			.then(res => {
				console.log("RES DELETE", res);
				console.log("RES DATA DELETE", res.data);
				const blogPosts = blogPosts.filter(post => post._id !== id);
				setBlogPosts(blogPosts)
			})
	};

	console.log("BLOGPOSTS", blogPosts);
	return (
		<div style={{paddingTop: 80}}>
			<BlogPostListPage
				deletePost={deletePost}
				blogPosts={blogPosts}
			/>
			<PlayerForm/>
		</div>
	)
}

export default Blog;
