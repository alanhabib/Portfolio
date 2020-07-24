import React, {Fragment, useState} from 'react';
import './styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitterSquare, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import SectionCard from "./sectionCard";
import image from "../../../build/images/thumb-card5.png"
import anotherOne from "../../../build/images/cestovat-chladny-dno-jednoduchost-2868847.jpg"
import {NavLink} from "react-router-dom";
import Hamburger from "../../Components/Lib/Hamburger";

const style = {
	cursor: "pointer",
	width: 24,
	height: 24
};

const text = "I create responsive websites that allow the user to experience your website in the best and " +
	"most appropriate way suited to the device they are using. By working using progressive " +
	"enhancement, your website is delivered with a responsive layout that can best make use of " +
	"the space available on the smallest to largest devices.";

const secondText = "Apart from creating websites I also create applications using React Native. React Native " +
	"combines the best parts of native development with React, a best-in-class JavaScript library " +
	"for building user interfaces.";

const title = "About";
const secondTitle = "Contact me";
const serviceTitle = "Services";
const buttonText = "Button text";
const projectsTitle = "Projects";
const thirdTitle = "Blog";

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

const Home = () => {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<main className={"mainContainer"}>
			<section className="s1">
				<div className="main-container">
					<div className="greeting-wrapper">
						<h1>Hi, I'm Alan Habib</h1>
					</div>
					<div className="intro-wrapper">
						<div className="nav-wrapper">
							<div className="dots-wrapper">
								<div className="browser-dot dot-1"/>
								<div className="browser-dot dot-2"/>
								<div className="browser-dot dot-3"/>
							</div>
							<div className={`navbarMenuContainer ${menuActive && "active"}`}>
								<ul className={"navbarMenuList"}>
									{navLinks.map((link) => (
										<li
											key={link.id}
											className={"navbarMenuListItem"}
										>
											<NavLink
												onClick={() => setMenuActive(false)}
												className="nav__link"
												to={link.path}>
												{link.title}
											</NavLink>
										</li>
									))}
								</ul>
							</div>
							<Hamburger
								menuActive={menuActive}
								onClick={() => setMenuActive(!menuActive)}
							/>
						</div>
						<div className="left-column">
							<img alt={"put here personal"} id="profile_pic" src={image}/>
							<h5 style={{textAlign: "center", lineHeight: 0}}>Personalize Theme</h5>

							<div id="theme-options-wrapper">
								<div id="light-mode" className="theme-dot"/>
								<div id="blue-mode" className="theme-dot"/>
							</div>

							<p id="settings-note">{"Theme settings will be saved for your next visit"}</p>
						</div>
						<div className="right-column">
							<div className="preview-shadow">
								<div className="preview">
									<div id="corner-tl" className="corner"/>
									<div id="corner-tr" className="corner"/>
									<h3>What I Do</h3>
									<p>I was a frontend developer in a past life, now I enjoy full stack
										development.</p>
									<div id="corner-br" className="corner"/>
									<div id="corner-bl" className="corner"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="s2">
				<div className="main-container">
					<div className="about-wrapper">
						<div className="about-me">
							<h4>More about me</h4>
							<p>
								I build new projects just to tickle my brain and love teaching others how they're
								made.
							</p>
							<p>
								While I keep busy teaching courses, I still take interviews in search of a great team &
								projects that interest me.
							</p>
							<hr/>
							<h4>TOP EXPERTISE</h4>
							<p>Fullstack developer with primary focus on React.js + Node.js:
								<a
									target="_blank"
									href="resume.pdf"
								>
									Download Resume
								</a>
							</p>
							<div id="skills">
								<ul>
									<li>JavaScript</li>
									<li>React.js</li>
									<li>React Native</li>
									<li>Node.js</li>
									<li>MongoDB</li>
								</ul>
								<ul>
									<li>Redux</li>
									<li>Firebase</li>
									<li>Github</li>
									<li>Heroku</li>
									<li>HTML/CSS</li>
								</ul>
							</div>
						</div>
						<div className="social-links">
							<img alt={"set pic"} id="social_img" src={image}/>
							<h4>Find me on Twitter & Linkedin</h4>
							<a target="_blank" href="https://www.youtube.com/c/dennisivy">Linkedin: @AlanHabib</a>
							<br/>
							<a target="_blank" href="https://twitter.com/dennisivy11">Twitter: @AlanHabib</a>
						</div>
					</div>
				</div>
			</section>
			<section className="s1">
				<div className="main-container">
					<h3> Past projects</h3>
					<div className="post-wrapper">
						<div>
							<div className="post">
								<img className="thumbnail" src={image}/>
								<div className="post-preview">
									<h6 className="post-title">Laboratory Management System</h6>
									<p className="post-intro">Designed built & mantained a the lab managment system
										for FOI Laboratories</p>
									<a href="#">Read More</a>
								</div>
							</div>
						</div>

						<div>
							<div className="post">
								<img alt={"pics here"} className="thumbnail" src={image}/>
								<div className="post-preview">
									<h6 className="post-title">Online Store - CoursePost Title</h6>
									<p className="post-intro">Online store with paypal payments intergration and
										guest user shopping</p>
									<a href="#">Read More</a>
								</div>
							</div>
						</div>
						<div>
							<div className="post">
								<img alt={"pics here"} className="thumbnail" src={image}/>
								<div className="post-preview">
									<h6 className="post-title">Online Store - CoursePost Title</h6>
									<p className="post-intro">Online store with paypal payments intergration and
										guest user shopping</p>
									<a href="#">Read More</a>
								</div>
							</div>
						</div>

						<div>
							<div className="post">
								<img className="thumbnail" src={image}/>
								<div className="post-preview">
									<h5 className="post-title">Membership Website</h5>
									<p className="post-intro">
										Modulized guide for online courses with step by step
										intructions
									</p>
									<a href="#">Read More</a>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
			<section className="s2">
				<div className="main-container">
					<a href="#"/>
					<h3>Get In Touch</h3>

					<form id="contact-form">
						<label>Name</label>
						<input className="input-field" type="text" name="name"/>

						<label>Subject</label>
						<input className="input-field" type="text" name="subject"/>

						<label>Email</label>
						<input className="input-field" type="text" name="email"/>

						<label>Message</label>
						<textarea className="input-field" name="message"/>

						<input id="submit-btn" type="submit" value="Send"/>
					</form>
				</div>
			</section>
		</main>

		// < main
		// className = {"container"} >
		// <header className={"header"}>
		// <h1>I'm Alan.H</h1>
		// <h4>{"Junior full stack JavaScript developer "}</h4>
		// <a href={"/hire"} className={"linkButton"}>{"Hire me"}</a>
		// <ul>
		// <li>
		// <FontAwesomeIcon
		// 					onClick={() => {
		// 						console.log("#### SCROLLBUTTON");
		// 					}}
		// 					style={style}
		// 					size={"sm"}
		// 					icon={faFacebook}/>
		// 			</li>
		// 			<li>
		// 				<FontAwesomeIcon
		// 					onClick={() => {
		// 						console.log("#### SCROLLBUTTON");
		// 					}}
		// 					style={style}
		// 					size={"sm"}
		// 					icon={faTwitterSquare}/>
		// 			</li>
		// 			<li>
		// 				<FontAwesomeIcon
		// 					onClick={() => {
		// 						console.log("#### SCROLLBUTTON");
		// 					}}
		// 					style={style}
		// 					size={"sm"}
		// 					icon={faLinkedinIn}/>
		// 			</li>
		// 		</ul>
		// 	</header>
		// 	<SectionCard
		// 		about={true}
		// 		text={text}
		// 		buttonText={buttonText}
		// 		secondText={secondText}
		// 		title={title}
		// 		button={true}
		// 		image={image}
		// 	/>
		// 	<SectionCard
		// 		buttonText={buttonText}
		// 		card={true}
		// 		title={serviceTitle}
		// 		service={true}
		// 	/>
		// 	<SectionCard
		// 		buttonText={buttonText}
		// 		card={true}
		// 		title={projectsTitle}
		// 		image={true}
		// 	/>
		// 	<SectionCard
		// 		about={true}
		// 		text={text}
		// 		buttonText={buttonText}
		// 		secondText={secondText}
		// 		title={secondTitle}
		// 		button={true}
		// 		image={image}
		// 	/>
		// 	<SectionCard
		// 		about={true}
		// 		text={text}
		// 		buttonText={buttonText}
		// 		secondText={secondText}
		// 		title={thirdTitle}
		// 		button={true}
		// 		image={anotherOne}
		// 		path={"/blog"}
		// 	/>
		// </main>
	)
}

export default Home;
