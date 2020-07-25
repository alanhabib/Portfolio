import React, {useState} from "react";
import "./styles.scss";
import {NavLink} from "react-router-dom";
import Hamburger from "../../Components/Lib/Hamburger";
import image from "../../../build/images/thumb-card5.png";
const navLinks = [
	{
		title: "Home",
		path: "/",
		id: 1
	}, {
		title: "Blog",
		path: "/blog",
		id: 2
	}, {
		title: "About",
		path: "/about",
		id: 3
	}, {
		title: "Hire",
		path: "/hire",
		id: 4
	},
];
const About = () => {
	const [menuActive, setMenuActive] = useState(false);

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

