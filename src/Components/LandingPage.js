import React, { Component } from "react";
import PropTypes from "prop-types";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import TrackVisbility from "./TrackVisbility";

export default class LandingPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <TrackVisbility
          onVisible={() => console.log("HOME")}
        >
          <Home />
        </TrackVisbility>
        <div className={"dotted"}></div>
        <TrackVisbility
          onVisible={() => console.log("About")}
        >
          <About />
        </TrackVisbility>
        <div className={"dotted"}></div>
        <TrackVisbility
          onVisible={() => console.log("Projects")}
        >
          <Projects />
        </TrackVisbility>
      </div>
    );
  }
}
