import React from "react";
import {
	BrowserRouter,
	Switch,
	Route
} from "react-router-dom";
import Header from "../Components/Layouts/Header";
import Home from "../Components/Home/Home";
import Blog from "../Components/Blog";
import Contact from "../Components/Contact";
import NotFoundPage from "../Components/NotFoundPage";
import Footer from "../Components/Layouts/Footer";
import Projects from "../Components/Projects";
import About from "../Components/About/About";
import LandingPage from "../Components/LandingPage";

const Routes = () => {
	return (
		<BrowserRouter>
			<div>
				<Header/>
				<Switch>
					<Route exact path={"/"} component={LandingPage}/>
					<Route path={"/home"} component={Home}/>
					<Route path={"/about"} component={About}/>
					<Route
						path={"/blog"}
						component={Blog}
					/>
					<Route path={"/projects"} component={Projects}/>
					<Route path={"/contact"} component={Contact}/>
					<Route component={NotFoundPage}/>
				</Switch>
				<Footer/>
			</div>
		</BrowserRouter>
	);
};

export default Routes;
