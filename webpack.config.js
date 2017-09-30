const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PUBLIC_DIR = path.resolve(__dirname, 'public')
const DIST_DIR = path.resolve(__dirname, 'build')
const SRC_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'App.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2017', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        },],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${PUBLIC_DIR}/index.html`,
    }),
  ],
  devServer: {
    contentBase: "./build",
    hot: false,
  },
}