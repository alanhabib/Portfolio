import React, {Component, Fragment} from "react";
// import styles from "./Home.scss";
import classNames from "classnames";
import nightTrafic from "../../../build/images/night_trafic.jpg"
import Card from "../Lib/Card/card";
import CustomizedButtons from "../Lib/Button";

import "./Home.scss";
import About from "../About/About";

class Home extends Component {

	render() {
		return (
			<div style={{
				marginTop: 60
			}}>
				<section
					className="intro"
					id="home">
					<h1 className="section__title section__title--intro">
						Hej, Mitt namn är <strong>SUPERMAN</strong>
					</h1>
					<p className="section__subtitle section__subtitle--intro">Relationskonsult</p>
					<img src={nightTrafic} alt="a picture of Jane Smith smiling" className="intro__img"/>
				</section>
				<About/>
			</div>
		);
	}
}

export default Home;