import React, {Component} from "react";
import PropTypes from "prop-types";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects";
import "./LandingPage.scss";
import styled, {css} from 'styled-components';
import TrackVisbility from "./TrackVisbility";
import Fade from "react-reveal/Fade";
import Project from "./Project";
import Header from "./Layouts/Header";


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
  ${props => props.selected
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
			active: {
				id: null,
				ratio: 0
			},
			things:
				[
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
				],
		};
		this.rootRef = React.createRef();
		this.singleRefs = this.state.things.reduce((acc, value) => {
			acc[value.id] = {
				ref: React.createRef(),
				id: value.id,
				ratio: 0,
			};
			return acc;
		}, {});
		const callback = (entries) => {
			entries.forEach(entry => {
				if(!entry.isIntersecting) {
					return;
				}
				this.singleRefs[entry.target.id] = entry.intersectionRatio;
			});

			const active = Object.values(this.singleRefs).reduce(
				(acc, current) => {
					console.log("CURRENT RATIO", current.ratio);
					return current > acc ? current : acc
				},
				this.state.active.ratio,
			);
			// console.log("#### ACTIVE", active);
			// console.log("#### ACTIVE 2 ", this.state.active);

			if(active > this.state.active.ratio) {
				this.setState({active},
					() => {
						console.log("#### 4", this.state.active);
					});
			}
		};
		const options = {
			root: null,
			rootMargin: "-30px",
			threshold: 0.5
		};

		this.observer = new IntersectionObserver(callback, options);
	}

	componentDidMount() {
		Object.values(this.singleRefs).forEach(value => {
				return this.observer.observe(value.ref.current)
			}
		);
	}

	articleRefHandler = () => {
		return (
			<Article ref={this.rootRef}>
				{this.state.things.map(comp => {
					// console.log("##### comp", comp);
					// console.log("##### singleRef", this.singleRefs[comp.id]);
					return (
						<div key={comp.id}
							 id={comp.id}
							 ref={this.singleRefs[comp.id].ref}
						>
							{comp.component}
						</div>
					)
				})}
			</Article>
		)
	};

	navigationHandler = () => {
		return (
			<Horizontal>
				<Navigation>
					{this.state.things.map(comp => (
						<div key={comp.id}>
							<Anchor
								href={`#${comp.id}`}
								selected={comp.id === this.state.active.id}
							>
								{comp.headLine}
							</Anchor>
						</div>
					))}
				</Navigation>
				{this.articleRefHandler()}
			</Horizontal>
		)
	};

	render() {
		return (this.navigationHandler());
	}
}
