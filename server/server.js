const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, ".", "public");
const port = 5000;

app.use(express.static(publicPath));
app.get("/", (req, res) => {
	res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(process.env.PORT || port, () => {
	console.log("Server is up")
});
