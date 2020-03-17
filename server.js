const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, ".", "client/build");
const PORT = process.env.PORT || 5000;



// app.get("/", (req, res) => {
// 	res.sendFile(path.join(publicPath, "index.html"));
// });

if(process.env.NODE_ENV === "production"){
	app.use(express.static(publicPath));
}

app.listen(PORT, () => {
	console.log(`Server is up on port: ${PORT}`)
});
