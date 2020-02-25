import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {
	AppBar,
	Toolbar,
	Typography,
	CssBaseline,
	Slide,
	useScrollTrigger
} from "@material-ui/core";

function HideOnScroll(props) {
	const {children} = props;
	const trigger = useScrollTrigger();

	return (
		<Slide
			timeout={{appear: false, enter: 800, exit: 800}}
			appear={false}
			direction="down"
			in={!trigger}
		>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func
};

const Header = ({props}) => {
	return (
		<React.Fragment>
			<CssBaseline/>
			<HideOnScroll {...props}>
				<AppBar
					style={{
						backgroundColor: "green",
						boxShadow: "none"
					}}
				>
					<Toolbar
						style={{
							display: "flex",
							justifyContent: "space-around"
						}}
					><Typography
						style={{
							color: "#fcfff9"
						}}
						variant="h2"
					>
						RCD <span style={{color: "red"}}>Bil</span>
					</Typography>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								fontSize: 18
								// width: "50%"
							}}
						>
							<NavLink
								style={{
									color: "#fcfff9",
									paddingRight: 8,
									paddingLeft: 8,
									textTransform: "uppercase"
								}}
								to={"/home"}
								activeClassName={"is-active"}
							>
								Hem
							</NavLink>
							<NavLink
								style={{
									color: "#fcfff9",
									paddingRight: 8,
									paddingLeft: 8,
									textTransform: "uppercase"
								}}
								to={"/about"}
								activeClassName={"is-active"}
							>
								köpa bil
							</NavLink>
							<NavLink
								style={{
									color: "#fcfff9",
									paddingRight: 8,
									paddingLeft: 8,
									textTransform: "uppercase"
								}}
								to={"/projects"}
								activeClassName={"is-active"}
							>
								sälj bil
							</NavLink>
							<NavLink
								style={{
									color: "#fcfff9",
									paddingRight: 8,
									paddingLeft: 8,
									textTransform: "uppercase"
								}}
								to={"/contact"}
								activeClassName={"is-active"}
							>
								kontakt
							</NavLink>
						</div>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar/>
		</React.Fragment>
	);
};

export default Header;
