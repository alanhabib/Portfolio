import React from "react";
import styled from "styled-components";
import styles from "./Home.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topIntroduction}>
        <p
          style={{
            margin: 14,
            fontFamily: "Indie Flower",
            fontSize: 46,
            textAlign: "center"
          }}
        >
          I'm Alan.
        </p>
        <p
          style={{
            margin: 14,
            fontFamily: "Roboto Mono",
            fontSize: 20,
            textAlign: "center"
          }}
        >
          a web developer
        </p>
      </div>
      <div
        style={{
          flex: 0.1,
          backgroundColor: "#e0ebe8",
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
      >
        <img
          style={{
            maxWidth: "100%",
            height: "auto",
            width: "auto"
          }}
          src={
            "http://seanhalpin.io/assets/img/content/home/masthead/land.svg"
          }
          alt={"home-pic"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          paddingTop: 40,
          paddingBottom: 40,
          paddingLeft: 250,
          paddingRight: 250
          // height: "100%"
        }}
      >
        <img
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%"
          }}
          alt="pirate"
          src={require("../../public/images/me.svg")}
        />
        <p className={""}>Hello.</p>
        <p style={{ textAlign: "center" }}>
          I'm a web developer / software enginear based in
          Stockholm, Sweden. I have a big passion for
          web/app development and I love to solve problems.
        </p>
      </div>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 0,
          marginBottom: 0,
          borderBottom: 8,
          borderBottomStyle: "dotted",
          borderColor: "#d9d9d9",
          width: "10%"
        }}
      ></div>
      <div>
        <p>What I can do.</p>
        <div>
          <div>
            <img></img>
            <img></img>
          </div>
          <div>
            <p>Develop the website that is on your mind</p>
            <p>
              I like to keep it simple. My goals are to
              focus on development, content and
              implementation of your ideas.
            </p>
          </div>
          <div>
            <div>
              <p>Develop the application you need</p>
              <p>
                As a software enginear you have to be
                flexible, I know all about creating an
                application to run across devices using the
                latest technologies.
              </p>
            </div>
            <div>
              <img></img>
              <img></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
