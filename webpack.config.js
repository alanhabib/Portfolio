const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app.js',
	devServer: {
		historyApiFallback: true
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.bundle.js',
		publicPath: "/"
	},
	watchOptions: {
		ignored: ["node_modules", "dist/main.min.js", ".idea"]
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 100000,
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader', // translates CSS into CommonJS
					'sass-loader' // compiles Sass to CSS, using Node Sass by default
				],
			},
		]
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'build', 'index.html')
		})
	]

};
