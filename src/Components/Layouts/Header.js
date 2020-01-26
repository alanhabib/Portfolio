import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Slide,
  useScrollTrigger
} from "@material-ui/core";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

const Header = ({ props }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          style={{
            backgroundColor: "#e0ebe8",
            boxShadow: "none"
          }}
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            <Typography
              style={{ color: "#45b29a" }}
              variant="h4"
            >
              Portfolio
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 22
                // width: "50%"
              }}
            >
              <NavLink
                style={{
                  color: "#45b29a",
                  paddingRight: 8,
                  paddingLeft: 8
                }}
                exact
                to={"/"}
                activeClassName={"is-active"}
              >
                Home
              </NavLink>
              <NavLink
                style={{
                  color: "#45b29a",
                  paddingRight: 8,
                  paddingLeft: 8
                }}
                to={"/create"}
                activeClassName={"is-active"}
              >
                Create
              </NavLink>
              <NavLink
                style={{
                  color: "#45b29a",
                  paddingRight: 8,
                  paddingLeft: 8
                }}
                to={"/help"}
                activeClassName={"is-active"}
              >
                Help
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
