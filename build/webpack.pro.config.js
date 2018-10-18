const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
  devtool: 'none',
  mode: "production",
  entry: {
    index: '@/index.js',
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
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),
    new HtmlWebpackPlugin({
      // title: "kcms_client",
      template: "./index.html"
    }),
    new webpack.DefinePlugin({
        HAS_SERVER: true
    })
  ],
  resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          'vue': 'vue/dist/vue.esm.js',     // 不加这一行，打包后，express加载为空白页
            '@': resolve('../src'),
        }
    }
}
