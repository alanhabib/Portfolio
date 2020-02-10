import React, { Fragment, Component } from "react";
import "./Home.css";
import About from "./About";
import Projects from "./Projects";
import classNames from "classnames";

class Home extends Component {
  render() {
    return (
      <div
        className={classNames(
          "container"
          // "firstSection"
        )}
      >
        <div className={"topIntroduction"}>
          <p className={"nameTag"}>I'm Alan.</p>
          <p className={"textParagraph"}>a web developer</p>
        </div>
        <div className={"headerImageWrapper"}>
          <img
            className={"image"}
            src={
              "http://seanhalpin.io/assets/img/content/home/masthead/land.svg"
            }
            alt={"home-pic"}
          />
        </div>
        <div className={"outerWrapper"}>
          <div className={"innerWrapper"}>
            <img
              className={"faceImage"}
              alt="pirate"
              src={require("../../public/images/me.svg")}
            />
            <p className={"textParagraph"}>
              <span className={"bigText"}>Hello.</span>
            </p>
            <p className={"textParagraph"}>
              I'm a web developer / software enginear based
              in Stockholm, Sweden. I have a big passion for
              web/app development and I love to solve
              problems.
            </p>
          </div>
        </div>
        <div className={"dotted"}></div>
        <div className={"innerWrapper"}>
          <p className={"textParagraph"}>
            <span className={"bigText"}>
              What I can do.
            </span>
          </p>
          <div className={"imageAndText"}>
            <div className={"innerImageAndTextWrapper"}>
              <div className={"innerImageAndText"}>
                <img
                  className={"faceImage"}
                  alt="pirate"
                  src={require("../../public/images/me.svg")}
                ></img>
                <img
                  className={"faceImage"}
                  alt="pirate"
                  src={require("../../public/images/me.svg")}
                ></img>
              </div>
              <div className={"innerImageAndText"}>
                <div className={"textWrapper"}>
                  <p className={"textParagraph"}>
                    Develop the website that is on your mind
                  </p>
                  <p className={"textParagraph"}>
                    I like to keep it simple. My goals are
                    to focus on development, content and
                    implementation of your ideas.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={"innerImageAndTextWrapper"}>
                <div className={"innerImageAndText"}>
                  <div className={"textWrapper"}>
                    <p className={"textParagraph"}>
                      <span className={"bigText"}>
                        Develop the application you need
                      </span>
                    </p>
                    <p className={"textParagraph"}>
                      As a software enginear you have to be
                      flexible, I know all about creating an
                      application to run across devices
                      using the latest technologies.
                    </p>
                  </div>
                </div>
                <div className={"innerImageAndText"}>
                  <img
                    className={"faceImage"}
                    alt="pirate"
                    src={require("../../public/images/me.svg")}
                  ></img>
                  <img
                    className={"faceImage"}
                    alt="pirate"
                    src={require("../../public/images/me.svg")}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"dotted"}></div>
      </div>
    );
  }
}

export default Home;
