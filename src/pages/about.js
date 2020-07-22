import React, {Fragment} from 'react';
import "./styles.scss";
import oldCar from "../../build/images/memories-from.jpg";

function About() {
	return (
		<Fragment>
			<section className="aboutContainer">
				<h1>About me</h1>
				<p className="section__subtitle section__subtitle--about">Frontend developer based in Stockholm</p>

				<div className="about-me__body">
					<p>I am a self-taught software and web developer dedicated to learn all about JavaScript for
						client-server architectures. After finishing my Bachelor's Degree in Finance, from Stockholm
						University, I worked as a financial adviser for a while until I felt the urge of changing lanes
						into programming.
					</p>
					<p>
						I ended up taking a Accelerated Learning Program that lasted for 3 months and
						continued studying programming for another 6 months until I landed my first Frontend developer
						position at a tech company in Stockholm.
					</p>
					<p>Today I work as a Frontend developer aspiring to become a fullstack developer in the near future.
						My aspirations means a lot of work in my spare time with the JavaScript language.
					</p>
				</div>
			</section>
		</Fragment>
	);
}

export default About;
