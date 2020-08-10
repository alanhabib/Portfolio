import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import path from "path";
import cors from "cors";
import routes from "./routes/blogRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

//Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blogDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// body-parser setup -> pass the request and encode it properly
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// app.post("/api/blogposts/:name/upvote", (req, res) => {
// 	const articleName = req.params.name;
// 	blogPostsInfo[articleName].upvotes += 1;
// 	res.status(200).send(`${articleName} now has ${blogPostsInfo[articleName].upvotes} upvotes`)
// });
//
// app.post("/api/blogposts/:name/add-comment", (req, res) => {
// 	const {username, text} = req.body;
// 	const articleName = req.params.name;
// 	blogPostsInfo[articleName].comments.push({username, text});
// 	res.status(200).send(blogPostsInfo[articleName])
// });
// CORS setup
app.use(cors());

routes(app);
if(process.env.NODE_ENV === "production") {
	app.use(express.static("build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve((__dirname, "build", "index.html")))
	})
}
app.get("/", (req, res) =>
	res.send(`OUR sucker application is running on port ${PORT}`)
);

app.listen(PORT, () =>
	console.log(`Your sucker server is running on port ${PORT}`)
);
