import React, {Component} from "react";
// import styles from "./Home.scss";
import classNames from "classnames";
import nightTrafic from "../../../public/images/night_trafic.jpg"
import Card from "../Lib/Card/card";

class Home extends Component {

	render() {
		return (
			<div style={styles.container}>
				<Card text={"something"} longText={"something else"}/>
				<Card text={"new text sent in"} longText={"anything else that is text"}/>
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
