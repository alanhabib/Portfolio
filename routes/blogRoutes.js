import {
	addNewBlog,
	deleteBlogPost,
	getBlog,
	getBlogById,
	updateBlogPost
} from "../controllers/blogController";

const routes = (app) => {
	app.route("/blogger")
		// GET endpoint
		.get(getBlog)
		// POST endpoint
		.post(addNewBlog);
	app.route("/blogger/:blogPostId")
		.get(getBlogById)
		.put(updateBlogPost)
		.delete(deleteBlogPost)
};

export default routes;
