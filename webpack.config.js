const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[name].[hash][ext]",
		clean: true,
	},
	resolve: {
		extensions: [".js"],
		alias: {
			"@assets": path.resolve(__dirname, "./src/assets/"),
			"@components": path.resolve(__dirname, "./src/components/"),
			"@containers": path.resolve(__dirname, "./src/containers/"),
			"@context": path.resolve(__dirname, "./src/context/"),
			"@styles": path.resolve(__dirname, "./src/styles/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.(jpg|jpeg|png|gif|webp|avif)$/,
				type: "asset/resource",
				generator: {
					filename: "assets/images/[name].[hash][ext]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: "./public/index.html",
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
		new Dotenv({
			systemvars: true,
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
};
