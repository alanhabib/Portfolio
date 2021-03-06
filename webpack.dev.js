const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./client/src/template.html"
		})
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "/client/dist")
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", // 3. Inject styles into DOM
					"css-loader", // 2. Turns css into common.js
					"sass-loader" // 1. Turns sass into css
				]
			}
		]
	}
});
