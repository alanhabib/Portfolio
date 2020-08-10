import React from 'react';
import MasonryPost from "./MasonryPost"
import PropTypes from 'prop-types';

PostMasonry.propTypes = {};

function PostMasonry({posts, columns, tagsOnTop}) {
	console.log("## posts", posts);
	return (
		<section className={"masonry"}>
			{posts.map((post, index) => (
				<MasonryPost {...{post, index, tagsOnTop, key: index}} />
			))}
		</section>
	);
}

export default PostMasonry;
