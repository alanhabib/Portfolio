import React, {Fragment} from 'react';
import {NavLink, useRouteMatch} from "react-router-dom";

function BlogPostList(props) {
	let {url} = useRouteMatch();
	return (
		props.blogPosts.map(blogPost => (
			<Fragment key={blogPost._id}>
				<NavLink
					activeStyle={{fontWeight: "bold", color: "red"}}
					to={{
						pathname: `${url}/:${blogPost._id}`,
						blogPost
					}}
					className={"blogPostListItem"}
				>
					<div>{blogPost.title}</div>
					<div>{blogPost.createdAt}</div>
					<p>{blogPost.text.substring(0, 50)}...</p>
				</NavLink>
				<button onClick={() => props.deletePost(blogPost._id)}>DELETE</button>

			</Fragment>
		))
	);
}

export default BlogPostList;
