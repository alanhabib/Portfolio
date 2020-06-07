import React, {Component, Fragment} from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import oldCar from "../../../build/images/old_car.jpg"
import {
	AppBar,
	Toolbar,
	Typography,
	CssBaseline,
	useScrollTrigger,
	withStyles
} from "@material-ui/core";
import classNames from "classnames";
import "./Index.css";

const useStyles = () => ({
	root: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		height: "8%",
		backgroundColor: "#fff"
	}
});

function ElevationScroll(props) {
	const {children, window} = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired
};

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			height: 0,
			hamburgerMenu: false
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({width: window.innerWidth, height: window.innerHeight});
	}

	toggleHamburgerHandler = () => {
		this.setState({
			hamburgerMenu: !this.state.hamburgerMenu
		})
	};

	refCallback = (node) => {
		if(this.state.width >= 420) {
			return "";
		}
		return node.onclick = () => {
			this.toggleHamburgerHandler();
			console.log("MOUSEOVER");
			node.focus();
		}
	};

	headerOnWebsite = () => {
		const {toolbar} = this.props;
		return (

			<Toolbar style={{
				display: "flex",
				justifyContent: "space-between",
				width: "100%"
			}}>
				<div className="logo">
					<a style={{color: "black"}}
					   href={"/"}
					   className="nav__link">
						<span className="logo">{"Alan's Blogg"}</span>
					</a>
				</div>
				<ul style={{
					color: "black",
					listStyle: "none",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start"
				}}
				>
					<li style={{padding: 10}}>
						<NavLink
							className="nav__link"
							activeClassName={{fontsize: "bold"}}
							to={"/home"}>
							<Typography variant="h6">
								About
							</Typography>
						</NavLink>
					</li>
					<li style={{padding: 10}}>
						<NavLink
							className="nav__link"
							activeClassName={{fontsize: "bold"}}
							to={"/about"}
						>
							<Typography variant="h6">
								Hire
							</Typography>
						</NavLink>
					</li>
					<li style={{padding: 10}}>
						<NavLink
							className="nav__link"
							activeClassName={{fontsize: "bold"}}
							to={"/projects"}
						>
							<Typography variant="h6">
								Blog
							</Typography>
						</NavLink>
					</li>
					<li style={{padding: 10}}>
						<NavLink
							className="nav__link"
							activeClassName={{fontsize: "bold"}}
							to={"/contact"}
						>
							<Typography variant="h6">
								Contact
							</Typography>
						</NavLink>
					</li>
				</ul>
			</Toolbar>
		)
	};

	headerOnMobile = () => {
		return (
			<Fragment>
				<div className="logo">
					<a
						href={"/"}
						className="nav__link">
						<img src={oldCar} alt=""/>
					</a>
				</div>
				<button
					onClick={() => this.toggleHamburgerHandler()}

					className={classNames("nav-toggle", this.state.hamburgerMenu
						? "nav-open"
						: "nav-toggle"
					)}
					aria-label="toggle navigation">
					<span className="hamburger"/>
				</button>
				<nav className={classNames("nav", this.state.hamburgerMenu
					? "nav-open"
					: "nav")}>
					<ul className="nav__list">
						<li className="nav__item">
							<NavLink
								className="nav__link"
								activeClassName={{fontsize: "bold"}}
								to={"/home"}
								innerRef={this.refCallback}>
								Home
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink
								className="nav__link"
								exact
								activeClassName={{fontsize: "bold"}}
								to={"/about"}
								innerRef={this.refCallback}>
								About
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink
								className="nav__link"
								exact
								activeClassName={{fontsize: "bold"}}
								to={"/projects"}
								innerRef={this.refCallback}>
								Projects
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink
								className="nav__link"
								exact
								activeClassName={{fontsize: "bold"}}
								to={"/contact"}
								innerRef={this.refCallback}>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</Fragment>
		)
	};

	render() {
		const {classes} = this.props;
		return (
			<React.Fragment>
				<CssBaseline/>
				<ElevationScroll>
					<AppBar className={classes.root}>
						{this.state.width >= 420 ? this.headerOnWebsite() : this.headerOnMobile()}
					</AppBar>
				</ElevationScroll>
			</React.Fragment>
		)
	}
}

export default withStyles(useStyles)(Header);
