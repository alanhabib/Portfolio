import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import oldCar from "../../../build/images/old_car.jpg"
import styles from "../../styles/styles.scss";
// import styles from "./About.scss";
import {
	AccessAlarm,
	ThreeDRotation
} from "@material-ui/icons";

export default class About extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<Fragment>
				<section className="my-services" id="services">
					<h2 className="section__title section__title--services">What I do</h2>
					<div className="services">
						<div className="service">
							<h3>Design + Development</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco
								laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>

						<div className="service">
							<h3>E-Commerce</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco
								laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>

						<div className="service">
							<h3>WordPress</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco
								laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
					</div>

					<a href="#" className="btn">My Work</a>
				</section>
				<section className="about-me" id="about">
					<h2 className="section__title section__title--about">Who I am</h2>
					<p className="section__subtitle section__subtitle--about">Designer & developer based out of NYC</p>

					<div className="about-me__body">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>

					<img src={oldCar} alt="Jane leaning against a bus" className="about-me__img"/>
				</section>
			</Fragment>
		);
	}
}

