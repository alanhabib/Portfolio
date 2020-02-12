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
                This is my first column
              </div>
              <div className={"column"}>
                This is my second column
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
