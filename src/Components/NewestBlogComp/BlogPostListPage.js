import React from 'react';
import BlogPostList from "./blogPostList";

function BlogPostListPage(props) {
	return (
		<>
			<h1>Blog posts</h1>
			< BlogPostList {...props}/>
		</>
	);
}

export default BlogPostListPage;
