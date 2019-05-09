const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

function resolve (dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	devtool: "none",
	mode: "production",
	entry: {
		index: "@/index.js"
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "../dist")
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,  // 不加这一行，会有warning: The code generator has deoptimised the styling of  as it exceeds the max of "500KB".
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 1024,
						name: "resources/[path][name]-[hash:8].[ext]"
					}
				}]
				// loader: 'url-loader?limit=1024'
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			}
		]
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: "~",
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(["dist"], {
			root: path.join(__dirname, "..")
		}),
		new HtmlWebpackPlugin({
			title: "kcms_client",
			template: "./index.html"
		}),
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		}),
		new webpack.DefinePlugin({
			// 不在区分是否启动前端的server,开发编码阶段，所有请求现在都请求到mockServer
			// HAS_SERVER: true,
			// TODO: 根据 process.env 定制不同环境下的地址
			// 配置Axios请求的基准路径
			baseURL: JSON.stringify("http://localhost:8000/")

		})
	],
	resolve: {
		extensions: [".js", ".vue"],
		alias: {
			"vue": "vue/dist/vue.esm.js",     // 不加这一行，打包后，express加载为空白页
			"iview": "iview/dist/iview.min.js",
			"@": resolve("../src"),
		}
	}
};
