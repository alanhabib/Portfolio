import React from "react";
import "./styles.scss";

const About = () => {
	return (
		<section className="about-me">
			<section className="aboutContainer">
				<h2>{"I Build Websites & Applications"}</h2>
				<div>
					<p>
						{"I am a self-taught software and web developer dedicated to learn all about JavaScript for" +
						"client-server architectures. After finishing my Bachelor's Degree in Finance, from Stockholm" +
						"University, I worked as a financial adviser for a while until I felt the urge of changing" +
						"lanes into programming."}
					</p>
					<p>
						I ended up taking a Accelerated Learning Program that lasted for 3 months and
						continued studying programming for another 6 months until I landed my first Frontend
						developer
						position at a tech company in Stockholm.
					</p>
					<p>Today I work as a Frontend developer aspiring to become a full stack developer in the near
						future.
						My aspirations means a lot of work in my spare time with the JavaScript language.
					</p>
				</div>
			</section>
		</section>
	);
};

export default About;

