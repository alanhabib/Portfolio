const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 2000;

app.use("/", (req, res) => {
	res.sendFile(__dirname + "/index.html")
});
