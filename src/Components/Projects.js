import React from "react";
import randomWoman from "../../public/images/random_woman.jpg"
import oldCar from "../../public/images/old_car.jpg"
import mercBenzRow from "../../public/images/merc_benz_row.jpg"
import oldBus from "../../public/images/old_bus.jpg"

const Projects = () => {
	return (
		<section className={styles.myWork}>
			<h2 className={styles.sectionTitle}>
				my work
			</h2>
			<p className={styles.sectionSubtitle}></p>
			<div className={styles.portfolio}>
				<a href={"#"} className={styles.portfolioItem}>
					<img src={randomWoman} alt={"random-woman"} className={styles.portfolioImg}/>
				</a>
				<a href={"#"} className={styles.portfolioItem}>
					<img src={oldCar} alt={"random-woman"} className={styles.portfolioImg}/>
				</a>
				<a href={"#"} className={styles.portfolioItem}>
					<img src={mercBenzRow} alt={"random-woman"} className={styles.portfolioImg}/>
				</a>
				<a href={"#"} className={styles.portfolioItem}>
					<img src={oldBus} alt={"random-woman"} className={styles.portfolioImg}/>
				</a>
				<a href={"#"} className={styles.portfolioItem}>
					<img src={randomWoman} alt={"random-woman"} className={styles.portfolioImg}/>
				</a>
			</div>
		</section>
	);
};

const styles = {
	container: {
		fontSize: 20,
		padding: 20,
		color: "#fff",
		background: "linear-gradient(to right, #141e30, #243b55)",
		width: "100%",
		height: "100vh"
	}
};

export default Projects;
