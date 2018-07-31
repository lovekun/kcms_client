const path = require('path');
const webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    devtool: '#source-map',
    mode: 'development',
    devServer: {
        port: 8000,
        hot: true,
        open: true,
        openPage: "#/login",
    },
    entry: {
        index: '@/index.js',
        'vue': '@/vendors/vendor.base.js',
        'iview': '@/vendors/vendor.iview.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
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
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        }),
        new HtmlwebpackPlugin({
            template: './index.html' // 该路径是根据启动node服务的路径,我理解为启动项目的根路径
        }),
        new webpack.DefinePlugin({
            HAS_SERVER: false
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': resolve('../src'),
        }
    }
};
