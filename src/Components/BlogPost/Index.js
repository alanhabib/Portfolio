import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import mockData from "../../mockdata/MOCK_DATA";
import Card from "../UI/Card";
import './styles.scss';

const BlogPost = (props) => {
	const [post, setPost] = useState({
		id: "",
		blogCategory: "",
		blogTitle: "",
		postedOn: "",
		author: "",
		blogImage: "",
		blogText: ""
	});
	const [slug, setSlug] = useState("");

	console.log("props.match", props.match);
	useEffect(() => {
		const slug = props.match.params.slug;
		const post = mockData.find(post => post.id == id);
		setPost(post);
		setSlug(slug)
	}, [post, props.match.params.slug]);

	// let {slug} = useParams();

	return (
		<div className="blogHeader">
			<span className="blogCategory">{post.blogCategory}</span>
			<h1 className="postTitle">{post.blogTitle}</h1>
			<span className="postedBy">posted on {post.postedOn} by {post.author}</span>
			<div className="blogText">{post.blogText}</div>
		</div>
	);

};

export default BlogPost
