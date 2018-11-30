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
    publicPath: '/'
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
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        use: ['file-loader', 'image-webpack-loader']
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [HTMLWebpackPlugin]
};