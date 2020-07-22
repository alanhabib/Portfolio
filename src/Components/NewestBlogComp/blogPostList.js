import React, {Fragment} from 'react';
import {NavLink, useRouteMatch} from "react-router-dom";

function BlogPostList(props) {
	let {url} = useRouteMatch();
	return (
		props.blogPosts.map(blogPost => (
			<div className={"blogPostListContainer"} key={blogPost._id}>
				<div className="blog-card alt">
					<div className="meta">
						<div className="photo"
							 style={{backgroundImage: `url("https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg")`}}></div>
						<ul className="details">
							<li className="author">Jane Doe</li>
							<li className="date">{blogPost.createdAt}</li>
						</ul>
					</div>

					<div className="description">
						<h2>{blogPost.title}</h2>
						<p>{blogPost.text.substring(0, 50)}...</p>
						<p className="read-more">
							<NavLink
								to={{
									pathname: `${url}/:${blogPost._id}`,
									blogPost
								}}
								className={"blogPostListItem"}
							>
								Read More
							</NavLink>
						</p>
					</div>
				</div>
				{/*<button onClick={() => props.deletePost(blogPost._id)}>DELETE</button>*/}
			</div>
		))
	);
}

export default BlogPostList;
