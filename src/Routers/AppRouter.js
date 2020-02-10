import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from "../Components/Layouts/Header";
import Home from "../Components/Home";
import EditExpensePage from "../Components/EditExpensePage";
import Contact from "../Components/Contact";
import NotFoundPage from "../Components/NotFoundPage";
import Footer from "../Components/Layouts/Footer";
import Projects from "../Components/Projects";
import About from "../Components/About";
import LandingPage from "../Components/LandingPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flex: 1
        }}
      >
        <Header />
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/home"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/projects"} component={Projects} />
          <Route
            path={"/edit/:id"}
            component={EditExpensePage}
          />
          <Route path={"/contact"} component={Contact} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
