import React, { Component } from "react";
import PropTypes from "prop-types";

export default class About extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          fontSize: 20,
          backgroundColor: "red",
          width: "100%"
        }}
      >
        This is my about page
      </div>
    );
  }
}
