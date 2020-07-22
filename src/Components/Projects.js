import React from "react";
import randomWoman from "../../build/images/random_woman.jpg"
import oldCar from "../../build/images/old_car.jpg"
import mercedes from "../../build/images/merc_benz_row.jpg"
import oldBus from "../../build/images/old_bus.jpg"
import styles from "../styles/styles.scss";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom";


const Projects = () => {
	let {path, url, match} = useRouteMatch();

	return (
		<section className="my-work" id="work">
			<h2 className="section__title">Projects</h2>
			<p className="section__subtitle"></p>

			<div className="portfolio">
				{/*<Switch>*/}
				{/*				<Route path={`${match.path}/:projectId`} href="#" className="portfolio__item">*/}
				{/*					<img src={randomWoman} alt="" className="portfolio__img"/>*/}
				{/*				</Route>*/}


				{/*				<Route href="#" className="portfolio__item">*/}
				{/*					<img src={oldCar} alt="" className="portfolio__img"/>*/}
				{/*				</Route>*/}


				<a href="#" className="portfolio__item">
					<img src={mercedes} alt="" className="portfolio__img"/>
				</a>


				<a href="#" className="portfolio__item">
					<img src={oldBus} alt="" className="portfolio__img"/>
				</a>
				<a href="#" className="portfolio__item">
					<img src={randomWoman} alt="" className="portfolio__img"/>
				</a>
				<a href="#" className="portfolio__item">
					<img src={oldCar} alt="" className="portfolio__img"/>
				</a>
				{/*</Switch>*/}
			</div>
		</section>
	);
};

// const styles = {
// 	container: {
// 		fontSize: 20,
// 		padding: 20,
// 		color: "#fff",
// 		background: "linear-gradient(to right, #141e30, #243b55)",
// 		width: "100%",
// 		height: "100vh"
// 	}
// };

export default Projects;
