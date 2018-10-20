const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devtool: '#source-map',
  mode: "development",
  devServer: {
    // 为contentBase 指定多个路径,第二个路径为数据访问路径
    contentBase: [path.join(__dirname, "../dist"), path.join(__dirname, "../src/data")],
    port: 8000,
    inline: true,
    hot: true,
    open: true,
    openPage: "#/login/",
    watchContentBase: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  entry: {
    index: '@/index.js'
  },
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
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
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..')
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
      baseURL: JSON.stringify('http://localhost:8000/api')

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
