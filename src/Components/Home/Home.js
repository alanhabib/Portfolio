import React, {Component, Fragment} from "react";
// import styles from "./Home.scss";
import classNames from "classnames";
import nightTrafic from "../../../public/images/night_trafic.jpg"
import Card from "../Lib/Card/card";
import CustomizedButtons from "../Lib/Button";

class Home extends Component {

	render() {
		return (
			<Fragment>
				<section className={styles.intro} id={"home"}>
					<h1 className={[styles.sectionTitle, sectionTitleIntro]}>
						Hi, I am <strong>Alan</strong>
					</h1>
					<p className={[styles.sectionSubtitle, styles.sectionTitleIntro]}>
						front-end dev
					</p>
					<img src={nightTrafic} alt={"night-trafic"}/>
				</section>
				<section className={styles.myServices}>
					<h2 className={[styles.sectionTitle, styles.sectionTitleServices]}>
						What I do
					</h2>
					<div className={styles.services}>
						<div className={styles.service}>
							<h3></h3>
							<p></p>
						</div>
						<div className={styles.service}>
							<h3></h3>
							<p></p>
						</div>
						<div className={styles.service}>
							<h3></h3>
							<p></p>
						</div>
					</div>
					<a href={"work"} className={styles.btn}>My work</a>

				</section>
				<div style={styles.container}>
					<Card text={"something"} longText={"something else"}/>
					<Card text={"new text sent in"} longText={"anything else that is text"}/>
					<div style={styles.buttonContainer}>
						<CustomizedButtons buttonText={"Köp bil"}/>
						<CustomizedButtons buttonText={"Sälj bil"}/>
					</div>
				</div>
			</Fragment>
		);
	}
}

const styles = {
	container: {
		padding: 20,
		background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
		height: "100vh",
		width: "100%"
	},
	buttonContainer: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center"
	}
};

export default Home;
