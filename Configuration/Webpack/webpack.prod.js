const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// Extract css into its own file and inject it
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Minify css that is being ejected into its own file
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// Minify js that is being ejected into its own file
const TerserPlugin = require("terser-webpack-plugin");
// Minify Html
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = require("./webpack.common");
const path = require("path");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: `/`,
    clean: true,
    compareBeforeEmit: true,
    path: path.resolve(__dirname, "../../dist"),
  },
  optimization: {
    minimizer: [
      // new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/public/index.html",
        minify: {
          collapseWhitespace: true,
          keepClosingSlash: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
