import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import oldCar from "../../../public/images/old_car.jpg"
import {
	AppBar,
	Toolbar,
	Typography,
	CssBaseline,
	Slide,
	useScrollTrigger
} from "@material-ui/core";
import classNames from "classnames";

// function HideOnScroll(props) {
// 	const {children} = props;
// 	const trigger = useScrollTrigger();
//
// 	return (
// 		<Slide
// 			timeout={{appear: false, enter: 800, exit: 800}}
// 			appear={false}
// 			direction="down"
// 			in={!trigger}
// 		>
// 			{children}
// 		</Slide>
// 	);
// }

// HideOnScroll.propTypes = {
// 	children: PropTypes.element.isRequired,
// 	window: PropTypes.func
// };

class Header extends Component {
	state = {
		hamburgerMenu: false
	};

	toggleHamburgerHandler = () => {
		this.setState({
			hamburgerMenu: !this.state.hamburgerMenu
		}, () => {
			console.log("## state", this.state);
		})
	};

	render() {
		return (
			<React.Fragment>
				<header>
					<div className="logo">
						<img src={oldCar} alt=""/>
					</div>
					<button
						onClick={() => this.toggleHamburgerHandler()}

						className={classNames("nav-toggle", this.state.hamburgerMenu
							? ("nav-open")
							: "nav-toggle"
						)}
						aria-label="toggle navigation">
						<span className="hamburger"></span>
					</button>
					<nav className="nav">
						<ul className="nav__list">
							<li className="nav__item"><a href="#" className="nav__link">Home</a></li>
							<li className="nav__item"><a href="#" className="nav__link">My Services</a></li>
							<li className="nav__item"><a href="#" className="nav__link">About me</a></li>
							<li className="nav__item"><a href="#" className="nav__link">My Work</a></li>
						</ul>
					</nav>
				</header>
			</React.Fragment>
		)
			;
	}
};

export default Header;
