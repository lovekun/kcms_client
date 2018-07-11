const path = require('path');
const webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
  devtool: '#source-map',
  mode: 'development',
  devServer: {
    // 为contentBase 指定多个路径,第二个路径为数据访问路径
    contentBase:[path.join(__dirname, "../dist"), path.join(__dirname, "../src/data")],
    // contentBase: './dist',
    port: 8000,
    inline: true,
    hot: true,
    open: true,
    openPage: "#/main/",
    watchContentBase: true,
    // publicPath: "/src/data/"
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
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
    rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        
        // {
        //     test: /src\/.*?js$/,
        //     loader: 'babel-loader'
        // },
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
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
          jQuery: "jquery",
          $: "jquery"
    }),
    new HtmlwebpackPlugin({
      template: './index.html'    // 该路径是根据启动node服务的路径,我理解为启动项目的根路径
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
