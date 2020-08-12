import React, {useState, useEffect, useRef} from 'react';
import './styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCodepen, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import SectionCard from "./sectionCard";
import image from "../../../images/m-blog-4.jpg"
import anotherOne from "../../../images/m-blog-5.jpg"
import {NavLink, useRouteMatch} from "react-router-dom";
import Hamburger from "../../Components/Lib/Hamburger";
import Form from "../../Components/Form"
import {useLocation} from "react-router-dom";
import Header from "../../Components/Header";
import projectsData from "../../../../projectData"

const style = {
	cursor: "pointer",
	width: 34,
	height: 34
};

const text = "I create responsive websites that allow the user to experience your website in the best and " +
	"most appropriate way suited to the device they are using. By working using progressive " +
	"enhancement, your website is delivered with a responsive layout that can best make use of " +
	"the space available on the smallest to largest devices.";

const secondText = "Apart from creating websites I also create applications using React Native. React Native " +
	"combines the best parts of native development with React, a best-in-class JavaScript library " +
	"for building user interfaces.";

const thirdText = `Stockholm Art Walk is an art guide through Stockholm's 
										subway. I developed 
										the Art Walk app with React Native. Today, it is one of the most popular
										Stockholm metro apps with 250,000+ downloads. Available for iOS and
										Android.`;

function Home() {
	const [menuActive, setMenuActive] = useState(false);
	// useEffect(() => {
	// 	window.scrollTo(0, document.body.scrollHeight);
	// }, ["/"]);

	return (
		<main className={"mainContainer"}>
			{/*<h5 style={{textAlign: "center", lineHeight: 0}}>Personalize Theme</h5>*/}

			{/*<div id="theme-options-wrapper">*/}
			{/*	<div id="light-mode" className="theme-dot"/>*/}
			{/*	<div id="dark-mode" className="theme-dot"/>*/}
			{/*</div>*/}
			{/*<p id="settings-note">{"Theme settings will be saved for your next visit"}</p>*/}
			<Header
				title={"Hi, I am Alan!"}
				rightContent={<img alt={"put here personal"} id="profile_pic" src={image}/>}
				leftColumnTitle={"What I Do"}
				lefttColumnText={
					"I was a frontend developer in a past life, now I aspire for full stack"
				}/>
			<section className="s2">
				<div className="container">
					<div className="about-wrapper">
						<div className="social-links">
							<img alt={"set pic"} id="social_img" src={image}/>
							<h4>Find me on Github & Linkedin</h4>
							<ul>
								<a
									target="_blank"
									href={"https://github.com/alanhabib"}>
									<FontAwesomeIcon
										style={style}
										size={"lg"}
										icon={faGithub}/>
								</a>
								<a
									target="_blank"
									href={"https://www.linkedin.com/in/alan-habib-43a5b9167/"}>
									<FontAwesomeIcon
										style={style}
										size={"lg"}
										icon={faLinkedinIn}/>
								</a>
								<a
									target="_blank"
									href={"https://codesandbox.io/u/alanhabib/sandboxes"}>
									<FontAwesomeIcon
										style={style}
										size={"lg"}
										icon={faCodepen}/>
								</a>
							</ul>
						</div>
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
					</div>
				</div>
			</section>
			<section className="s3">
				<div className="main-container">
					<h3> Past projects</h3>
					<div className="post-wrapper">
						{projectsData.map((project) => (
							<div key={project.id}>
								<div className="post">
									<img alt={"pics here"} className="thumbnail" src={project.image}/>
									<div className="post-preview">
										<h5 className="post-title">{project.title}</h5>
										<p className="post-intro">
											{project.text.substring(0, 80)}...
										</p>
										<NavLink
											to={{
												pathname: `projects/:${project.slug}`,
												project
											}}
											className={"blogPostListItem"}
										>
											Read More
										</NavLink>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<Form title={"Get in touch"}/>
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
