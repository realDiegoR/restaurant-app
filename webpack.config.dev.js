const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
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
				use: ["style-loader", "css-loader", "sass-loader"],
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
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		open: true,
	},
};
