import React from "react";

const Home = () => {
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          color: "#45b29a",
          display: "flex",
          backgroundColor: "#e0ebe8",
          flex: 0.1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
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
          justifyContent: "space-between",
          flex: 1,
          // height: "100%",
          fontSize: 40
        }}
      >
        <h2>added expense added expense</h2>
        <h2>added expense added expense</h2>
        <h2>
          added expense added expense added expense added
          expense added expense
        </h2>
        <h2>
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense
        </h2>
        <h2>
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense
        </h2>
        <h2>
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense
        </h2>
        <h2>
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense
        </h2>
        <h2>
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense
        </h2>
        <h2>
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense added
          expense added expense added expense added expense
          added expense added expense added expense
        </h2>
      </div>
    </div>
  );
};

export default Home;
