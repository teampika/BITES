/**
 * ************************************
 *
 * @module  webpack.config.js
 * @description Webpack Configuration
 *
 * ************************************
 */

const path = require('path');
const HTMLWebpack = require('html-webpack-plugin');

const HTMLWebpackPlugin = new HTMLWebpack({
  template: path.resolve(__dirname, './src/index.html'),
  filename: './index.html',
})

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [HTMLWebpackPlugin]
};