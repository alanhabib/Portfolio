import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {Toolbar, Typography} from "@material-ui/core";
import {
	AccessAlarm,
	ThreeDRotation
} from "@material-ui/icons";

const Footer = () => {
	return (
		// <div
		// 	style={{
		// 		backgroundColor: "#c5ded7",
		// 		boxShadow: "none",
		// 		flexShrink: 0,
		// 		height: "10%"
		// 	}}
		// >
		// 	<div
		// 		style={{
		// 			display: "flex",
		// 			justifyContent: "space-between"
		// 		}}
		// 	>
		// 		<h4>Portfolio</h4>
		// 		<div
		// 			style={{
		// 				display: "flex",
		// 				justifyContent: "center",
		// 				fontSize: 22
		// 				// width: "50%"
		// 			}}
		// 		>
		// 			<NavLink
		// 				style={{
		// 					color: "#45b29a",
		// 					paddingRight: 8,
		// 					paddingLeft: 8
		// 				}}
		// 				exact
		// 				to={"/"}
		// 				activeClassName={"is-active"}
		// 			>
		// 				Home
		// 			</NavLink>
		// 			<NavLink
		// 				style={{
		// 					color: "#45b29a",
		// 					paddingRight: 8,
		// 					paddingLeft: 8
		// 				}}
		// 				to={"/create"}
		// 				activeClassName={"is-active"}
		// 			>
		// 				Create
		// 			</NavLink>
		// 			<NavLink
		// 				style={{
		// 					color: "#45b29a",
		// 					paddingRight: 8,
		// 					paddingLeft: 8
		// 				}}
		// 				to={"/help"}
		// 				activeClassName={"is-active"}
		// 			>
		// 				Help
		// 			</NavLink>
		// 		</div>
		// 	</div>
		<div className={"footer"}>
			<ul className="social-list">
				<li className="social-list__item">
					<a className="social-list__link" href="https://codepen.io">
						<AccessAlarm/>
					</a>
				</li>
				<li className="social-list__item">
					<a className="social-list__link" href="http://dribbble.com">
						<AccessAlarm/>

					</a>
				</li>
				<li className="social-list__item">
					<a className="social-list__link" href="https://twitter.com">
						<AccessAlarm/>

					</a>
				</li>
				<li className="social-list__item">
					<a className="social-list__link" href="https://github.com">
						<AccessAlarm/>

					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
