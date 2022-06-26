const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
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
    minimize: true,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        terserOptions: {
          mangle: true, // provide code obfuscation
        },
        // Not extracting comments into their own file (file named main.[contecthash]..LICENSE.txt)
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
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

    // case 2 : split all the code from node_modules

    // splitChunks: {
    //   cacheGroups: {
    //     chunks: "all",
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendor",
    //     },
    //   },
    // },

    /**
     * case 2 : split everuthing in our vendor that is redux, react, react-dom etc
     *          that is split every npm package
     */
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `vendor.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CompressionPlugin({
      filename: "[name]-[fragment].gz",
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      // threshold: 10240,
      minRatio: 0.8,
    }),
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
