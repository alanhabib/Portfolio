import React from "react";
// import styles from "./Home.scss";
import classNames from "classnames";
import nightTrafic from "../../../build/images/night_trafic.jpg";

import "./Home.scss";
import About from "../About/About";

const Home = () => {
	return (
		<div style={{
			height: "100vh"
		}}>
			<section
				className="intro"
				id="home">
				<img src={nightTrafic} alt="a picture of Jane Smith smiling" className="intro__img"/>
				<button style={{width: 30, height: 30, alignSelf: "center"}}>down</button>
			</section>
		</div>
	);
};

export default Home;
