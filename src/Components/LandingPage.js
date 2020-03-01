import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects";
import TrackVisbility from "./TrackVisbility";
import Fade from "react-reveal/Fade";

const animateList = [
	<Home/>,
	<About/>,
	<Projects/>
];

export default class LandingPage extends Component {
	static propTypes = {
		prop: PropTypes
	};

	renderComponentHandler = () => {
		return (
			animateList.map((comp, key) => {
				return (
					<div style={styles.block} key={key}>
						<Fade top>
							<TrackVisbility
								onVisible={() => console.log("component", comp)}
							>
								{comp}
							</TrackVisbility>
						</Fade>
					</div>
				)
			})
		)
	};

	render() {
		return (
			<Fragment>
				{this.renderComponentHandler()}
			</Fragment>
		);
	}
}

const styles = {
	block: {
		width: "100%",
		height: "100%"
	}
};
