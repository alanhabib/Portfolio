import React from "react";
import "./styles.scss";

const About = () => {
	return (
		<section className="aboutContainer">
			<h1>{"I Build Websites & Applications"}</h1>
			<div>
				<p>
					{"I am a self-taught Front-End Engineer who specializes in developing React web apps. I am " +
					"dedicated to learn all about JavaScript for client/server architectures. My ambition is " +
					"to develop beautiful and smooth websites with hard work and dedication."}
				</p>
				<p>
					After finishing my Bachelor's Degree in Finance, from Stockholm University, I worked as a
					financial adviser for a while until I felt the urge of changing lanes into programming.
				</p>
				<p>Today I work as a Frontend developer aspiring to become a full stack developer in the near
					future.
					My aspirations means a lot of work in my spare time with the JavaScript language.
				</p>
			</div>
		</section>
	);
};

export default About;

