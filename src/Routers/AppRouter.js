import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from "../Components/Layouts/Header";
import Home from "../Components/Home";
import EditExpensePage from "../Components/EditExpensePage";
import HelpPage from "../Components/HelpPage";
import NotFoundPage from "../Components/NotFoundPage";
import Footer from "../Components/Layouts/Footer";
import Projects from "../Components/Projects";

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
          <Route exact path={"/"} component={Home} />
          <Route path={"/projects"} component={Projects} />
          <Route
            path={"/edit/:id"}
            component={EditExpensePage}
          />
          <Route path={"/help"} component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
