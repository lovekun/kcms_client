const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
  devtool: '#source-map',
  mode: "development",
  devServer: {
    // 为contentBase 指定多个路径,第二个路径为数据访问路径
    contentBase:[path.join(__dirname, "../dist"), path.join(__dirname, "../src/data")],
    port: 8000,
    inline: true,
    hot: true,
    open: true,
    openPage: "#/login/",
    watchContentBase: true,
  },
  entry: {
    index: '@/index.js'
  },
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),
    new HtmlWebpackPlugin({
      title: "kcms_client",
      template: "./index.html"
    })
  ],
  resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            // 引入vue时，默认引入的是dist/vue.runtime.common.js, 所以要修改
            'vue': 'vue/dist/vue.esm.js',
            '@': resolve('../src'),
        }
    }
}
