import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {Toolbar, Typography} from "@material-ui/core";

const Footer = () => {
	return (
		<div
			style={{
				backgroundColor: "#c5ded7",
				boxShadow: "none",
				flexShrink: 0,
				height: "10%"
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				<h4>Portfolio</h4>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						fontSize: 22
						// width: "50%"
					}}
				>
					<NavLink
						style={{
							color: "#45b29a",
							paddingRight: 8,
							paddingLeft: 8
						}}
						exact
						to={"/"}
						activeClassName={"is-active"}
					>
						Home
					</NavLink>
					<NavLink
						style={{
							color: "#45b29a",
							paddingRight: 8,
							paddingLeft: 8
						}}
						to={"/create"}
						activeClassName={"is-active"}
					>
						Create
					</NavLink>
					<NavLink
						style={{
							color: "#45b29a",
							paddingRight: 8,
							paddingLeft: 8
						}}
						to={"/help"}
						activeClassName={"is-active"}
					>
						Help
					</NavLink>
				</div>
			</div>
			<ul className={styles.socialList}>
				<li className={styles.socialListItem}>
					<a className={styles.socialListLink}>
						a
					</a>
				</li>
				<li className={styles.socialListItem}>
					<a className={styles.socialListLink}>
						b
					</a>
				</li>
				<li className={styles.socialListItem}>
					<a className={styles.socialListLink}>
						c
					</a>
				</li>
				<li className={styles.socialListItem}>
					<a className={styles.socialListLink}>
						d
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
