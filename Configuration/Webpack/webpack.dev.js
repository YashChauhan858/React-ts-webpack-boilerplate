const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
// const DashboardPlugin = require('webpack-dashboard/plugin');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3000/',
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    host: '0.0.0.0', // 0.0.0.0 let anyone to make request to our dev server
    historyApiFallback: {
      index: '/',
    },
    allowedHosts: 'all',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ErrorOverlayPlugin(),
    // new DashboardPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
