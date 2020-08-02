import React from 'react';
import {Card} from 'antd';

function BlogPostPage({location}) {
	return (
		<div>
			<Card
				hoverable={true}
				title={`${location.blogPost.title}`}
			>
				<p>{location.blogPost.createdAt}</p>
				<p>{location.blogPost.text}</p>
			</Card>
		</div>
	);
}

export default BlogPostPage;
