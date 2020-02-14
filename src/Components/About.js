import React, { Component } from "react";
import PropTypes from "prop-types";
import "./About.css";
import {
  AccessAlarm,
  ThreeDRotation
} from "@material-ui/icons";

export default class About extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className={"container"}>
        <div className={"box"}>
          <div className={"content"}>
            <div className={"columns"}>
              <div className={"column"}>
                <p>Front-end Developer</p>
              </div>
              <div className={"column"}>
                Back-end Developer (in-progress)
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
