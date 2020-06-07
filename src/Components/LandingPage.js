import React, {Fragment} from 'react';
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects";
import "./LandingPage.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

function LandingPage(props) {
	const list = [
		{
			id: 'aboutComp',
			home: <About/>,
			headline: "About"
		},
		{
			id: 'projectsComp',
			home: <Projects/>,
			headline: "Projects"
		},
	];

	const refs = list.reduce((acc, value) => {
		acc[value.id] = React.createRef();
		return acc;
	}, {});

	const handleClick = (id) =>
		refs[id].current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	return (
		<Fragment>
			{list.filter((listComp) => listComp.id === "aboutComp").map(comp => (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
						alignItems: "center",
						height: "100vh"
					}}
					key={comp.id}
				>
					<FontAwesomeIcon
						onClick={() => {
							console.log("#### SCROLLBUTTON");
							handleClick(comp.id);
						}}
						style={{
							cursor: "pointer",
							marginBottom: "20%",
							width: 50,
							height: 50
						}}
						size={"lg"}
						icon={faArrowDown}/>

				</div>
			))}

			{list.map(comp => (
				<div
					key={comp.id}
					ref={refs[comp.id]}
				>
					{comp.home}
				</div>
			))}
		</Fragment>
	);
}

export default LandingPage;
