const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");
module.exports = {
	mode: "production",
	// devtool: "source-map",
	entry: path.join(__dirname, "design", "ts", "app.ts"),
	module: {
		rules: [
			{
				test: /\.less$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.ts?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "../css/app.css",
		}),
		new CssMinimizerPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery/dist/jquery.slim.js",
			jQuery: "jquery/dist/jquery.slim.js",
		}),
	],
	resolve: {
		extensions: [".ts", ".less"],
		alias: {
			"@": path.resolve(__dirname, "design"),
		},
	},
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "public", "js"),
	},
};
