import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const BlogSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
});
