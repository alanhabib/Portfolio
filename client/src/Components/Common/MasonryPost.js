import React from 'react';
import {TagRow} from "./"
import PropTypes from 'prop-types';

MasonryPost.propTypes = {};

function MasonryPost({post, tagsOnTop}) {
	console.log("## post", post);
	// const imageBackground = {
	// 	backgroundImage: `url("${require(`../../../build/images/${post.image}`).default}")`
	// };

	const windowWidth = window.innerWidth;

	// const style = windowWidth > 900 ? {...imageBackground, ...post.style} : imageBackground;
	// Send style as style={style} to the a-tag
	return (
		<div style={{border: "solid 2px green"}}>
			<a className={"masonry-post overlay "} href={post.link}>
				<div className={"image-text"} style={{justifyContent: tagsOnTop ? "space-between" : "flex-end"}}>
					<TagRow tags={post.categories}/>
					<div>
						<h2 className={"image-title"}>{post.slug}</h2>
						<span className={"image-date"}>{post.date}</span>
					</div>
				</div>
			</a>
		</div>
	);
}

export default MasonryPost;
