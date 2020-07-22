import React from 'react';
import './styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitterSquare, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import SectionCard from "./sectionCard";
import image from "../../../build/images/thumb-card5.png"
import anotherOne from "../../../build/images/cestovat-chladny-dno-jednoduchost-2868847.jpg"

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

const Home = () => {
	return (
		<main className={"container"}>
			<header className={"header"}>
				<h1>I'm Alan.H</h1>
				<h4>{"Junior full stack JavaScript developer "}</h4>
				<a href={"/hire"} className={"linkButton"}>{"Hire me"}</a>
				<ul>
					<li>
						<FontAwesomeIcon
							onClick={() => {
								console.log("#### SCROLLBUTTON");
							}}
							style={style}
							size={"sm"}
							icon={faFacebook}/>
					</li>
					<li>
						<FontAwesomeIcon
							onClick={() => {
								console.log("#### SCROLLBUTTON");
							}}
							style={style}
							size={"sm"}
							icon={faTwitterSquare}/>
					</li>
					<li>
						<FontAwesomeIcon
							onClick={() => {
								console.log("#### SCROLLBUTTON");
							}}
							style={style}
							size={"sm"}
							icon={faLinkedinIn}/>
					</li>
				</ul>
			</header>
			<SectionCard
				about={true}
				text={text}
				buttonText={buttonText}
				secondText={secondText}
				title={title}
				button={true}
				image={image}
			/>
			<SectionCard
				buttonText={buttonText}
				card={true}
				title={serviceTitle}
				service={true}
			/>
			<SectionCard
				buttonText={buttonText}
				card={true}
				title={projectsTitle}
				image={true}
			/>
			<SectionCard
				about={true}
				text={text}
				buttonText={buttonText}
				secondText={secondText}
				title={secondTitle}
				button={true}
				image={image}
			/>
			<SectionCard
				about={true}
				text={text}
				buttonText={buttonText}
				secondText={secondText}
				title={thirdTitle}
				button={true}
				image={anotherOne}
				path={"/blog"}
			/>
		</main>
	);
};

export default Home;
