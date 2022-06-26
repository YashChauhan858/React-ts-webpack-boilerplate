const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:3000/`,
  },
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    // host: "0.0.0.0",
    host: "localhost",
    historyApiFallback: {
      index: "/",
    },
    allowedHosts: "all",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
