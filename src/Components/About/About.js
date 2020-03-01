import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import oldCar from "../../../public/images/old_car.jpg"
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
				<section className={styles.aboutMe}>
					<h2 className={[styles.sectionTitle, sectionTitleAbout]}>
						Who I am
					</h2>
					<div className={styles.aboutMeBody}>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
							of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
							a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
							Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
							word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
							sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
							Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
							popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
							amet..", comes from a line in section 1.10.32.
						</p>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
							of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
							a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
							Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
							word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
							sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
							Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
							popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
							amet..", comes from a line in section 1.10.32.
						</p>
					</div>
					<img src={oldCar} alt={"old-car"}/>
				</section>
			</Fragment>
		);
	}
}

const styles = {
	container: {
		fontSize: 20,
		padding: 20,
		color: "#fff",
		background: "linear-gradient(to right, #3c3b3f, #605c3c)",
		height: "100vh",
		width: "100%"
	}
};
