import React, {Component} from "react";
import PropTypes from "prop-types";
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
			<div style={styles.container}>
				<div>
					TEST!
				</div>
				<div>
					TEST!
				</div>
				<div>
					TEST!
				</div>
				<div>
					TEST!
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		backgroundColor: "#fafafa",
		height: "100vh",
		width: "100%"
	}
};
