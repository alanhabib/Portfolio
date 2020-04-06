import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects";
import styled, {css} from 'styled-components';
import TrackVisbility from "./TrackVisbility";
import Fade from "react-reveal/Fade";
import Project from "./Project";
import Header from "./Layouts/Header";

const animateList = {
	things: [
		{
			headLine: "Home",
			component: <Home/>,
			id: "home"
		},
		{
			headLine: "About",
			component: <About/>,
			id: "about"
		},
		{
			headLine: "Projects",
			component: <Projects/>,
			id: "projects"
		}
	]
};

const Horizontal = styled.div`
display: flex;
`;

const Navigation = styled.nav`
  margin: 30px;
`;
const Article = styled.div`
  overflow-y: scroll;
  height: 100vh;
`;

const Anchor = styled.a`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  ${props =>
	props.selected
		? css`
          border-bottom: 1px solid #000;
          font-weight: bold;
        `
		: null};
`;

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeComp: {
				id: null,
				ratio: 0
			}
		};
		this.rootRef = React.createRef();
		this.singleRefs = animateList.things.reduce((acc, value) => {
			acc[value.id] = {
				ref: React.createRef(),
				id: value.id,
				ratio: 0
			};
			return acc;
		}, {});
		const callback = entries => {
			entries.forEach(
				entry =>
					(this.singleRefs[entry.target.id].radio =
						entry.intersectionRatio)
			);
		};
		const activeThing = Object.values(this.singleRefs).reduce(
			(acc, value) => (value.ratio > acc.ratio ? value : acc),
			this.state.activeComp,
		);
		if (activeThing.ratio > this.state.activeComp.ratio) {
			this.setState({ activeComp: activeThing });
		}
		this.observer = new IntersectionObserver(callback, {
			root: this.rootRef.current,
			threshold: 0.7
		});
	}

	componentDidMount() {
		Object.values(this.singleRefs).forEach(value =>
			this.observer.observe(value.ref.current),
		);
	}

	renderComponentHandler = () => {
		// return (
		// 	animateList.map((comp) => {
		// 		console.log("#### comp", comp);
		// 		return (
		// 			<Fragment key={comp.id}>
		// 				<Fade top>
		// 					<TrackVisbility
		// 						onVisible={() => console.log("component", comp)}
		// 					>
		// 						{comp}
		// 					</TrackVisbility>
		// 				</Fade>
		// 			</Fragment>
		// 		)
		// 	})
		// )
	};

	navigationHandler = () => {
		return (
			<Horizontal>
				<Navigation>
					{animateList.things.map(comp => (
						<div key={comp.id}>
							<Anchor
								href={`#${comp.id}`}
								selected={comp.id === this.state.activeComp.id}
							>
								{comp.headLine}
							</Anchor>
						</div>
					))}
				</Navigation>
				<Article ref={this.rootRef}>
					{animateList.things.map(comp => (
						<div
							key={comp.id}
							id={comp.id}
							ref={this.singleRefs[comp.id].ref}
						>
							{comp.component}
						</div>
					))}
				</Article>
			</Horizontal>
		)
	};

	render() {
		return (
			this.navigationHandler()
		);
	}
}
