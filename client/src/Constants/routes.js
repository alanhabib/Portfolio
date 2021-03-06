import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import PageRenderer from "../PageRender";
import Blog from "../pages/blog";
import BlogPostPage from "../Components/NewestBlogComp/blogPostPage";
import Home from "../pages/home";
import Hire from "../pages/hire"
import NotFoundPage from "../pages/notFoundPage";
import About from "../pages/about";
import Project from "../Components/Projects";

const user = {
	firstName: "Alan",
	lastName: "Blogger"
};
const Routes = () => {
	return (
		<Router>
			<div className={"app"}>
				{/*<Navbar user={user}/>*/}
				<Switch>
					<Route exact path={"/"} component={Home}/>
					<Route exact path={"/blog"} component={Blog}/>
					<Route
						path={"/blog/:id"}
						component={BlogPostPage}
					/>
					<Route path={"/projects/:slug"} component={Project}/>
					<Route path={"/about"} component={About}/>
					<Route path={"/contact"} component={Hire}/>
					<Route component={NotFoundPage}/>
				</Switch>
				{/*<Footer/>*/}
			</div>
		</Router>
	);
};

export default Routes;
