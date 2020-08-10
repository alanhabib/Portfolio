import mongoose from "mongoose";
import {BlogSchema} from "../models/blogModels";

const Blogger = mongoose.model("Blogger", BlogSchema);

export const addNewBlog = (req, res) => {
	let newBlogger = new Blogger(req.body);

	newBlogger.save((err, Blogger) => {
		if(err) {
			res.send(err);
		}
		res.json(Blogger)
	})
};

export const getBlog = (req, res) => {
	Blogger.find({}, (err, Blogger) => {
		if(err) {
			res.send(err);
		}
		res.json(Blogger)
	})
};

export const getBlogById = (req, res) => {
	Blogger.findById(req.params.blogPostId, (err, Blogger) => {
		if(err) {
			res.send(err);
		}
		res.json(Blogger)
	})
};

export const updateBlogPost = (req, res) => {
	Blogger.findOneAndUpdate({_id: req.params.blogPostId}, req.body, {
		new: true,
		useFindAndModify: false
	}, (err, Blogger) => {
		if(err) {
			res.send(err);
		}
		res.json(Blogger)
	})
};

export const deleteBlogPost = (req, res) => {
	Blogger.deleteOne({_id: req.params.blogPostId}, (err) => {
		if(err) {
			res.send(err);
		}
		res.json({message: "Successfully deleted a blogPost"})
	})
};




