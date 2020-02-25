import React, {Component} from "react";
// import styles from "./Home.scss";
import classNames from "classnames";
import nightTrafic from "../../../public/images/night_trafic.jpg"
import Card from "../Lib/Card/card";

class Home extends Component {
	constructor(props) {
		super(props);
		this.wrapperRef = React.createRef();
	}

	state = {
		toggle: false
	};

	toggleHandler() {
		const wrapper = this.wrapperRef.current;
		wrapper.classList.toggle("is-nav-open")
	};

	render() {
		return (
			<div style={styles.container}>
				<Card/>
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

export default Home;
