import React, {useEffect, useState} from "react";
import Card from "../UI/Card";
import blogPosts from '../../Data/blog.json';
import {NavLink} from 'react-router-dom';
import "./styles.scss";

const Sidebar = (props) => {
	const [posts, setPosts] = useState([]);


	useEffect(() => {
		const posts = blogPosts.data;
		setPosts(posts);
	}, [posts]);
	return (
		<div className="sidebarContainer" style={{
			width: props.width
		}}>
			<Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
				<div className="cardHeader">
					<span>About Us</span>
				</div>
				<div className="profileImageContainer">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGAb43NxZswWRLw9RoxC8YwykXlLy_efq2r674Xj0ffRR3D-0P"
						alt=""/>
				</div>
				<div className="cardBody">
					<p className="personalBio">My name is Alan I am a software developer specialization in Front
						end developement....:)</p>
				</div>
			</Card>

			<Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
				<div className="cardHeader">
					<span>Recent Posts</span>
				</div>

				<div className="recentPosts">

					{
						posts.map(post => {
							console.log("### post", post);
							return (
								<NavLink key={post.id} to={`/post/${post.slug}`}>
									<div className="recentPost">
										<h3>{post.blogTitle}</h3>
										<span>{post.postedOn}</span>
									</div>
								</NavLink>

							);
						})
					}
				</div>

			</Card>
		</div>
	);
};

export default Sidebar
