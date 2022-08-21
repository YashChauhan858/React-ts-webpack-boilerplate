const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const BrotliPlugin = require('brotli-webpack-plugin');
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
    compareBeforeEmit: true,
    path: path.resolve(__dirname, '../../dist'),
  },
  optimization: {
    minimize: true,
    mergeDuplicateChunks: true,
    removeEmptyChunks: true,
    runtimeChunk: {
      name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
    },
    sideEffects: true, // essential for tree shaking
    providedExports: true, // essential for tree shaking
    usedExports: true, // essential for tree shaking
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
        template: './public/index.html',
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
    //   minSize: 0,
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
      chunks: 'all', // async for modulefedaration else all
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
            if (packageName.includes('react-dom')) {
              return 'vendom.react-dom';
            }
            return `vendor.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 0,
      minRatio: 0.8,
    }),
    // new CompressionPlugin({
    //   filename: "[name]-[fragment].gz",
    //   algorithm: "gzip",
    //   test: /\.(js|css|html|svg)$/,
    //   threshold: 0,
    //   minRatio: 0.8,
    // }),
    new WebpackObfuscator(
      {
        rotateStringArray: true,
      },
      ['vendom.react-dom.**.js']
    ),
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        // use: [
        //   "css-loader",
        //   // "sass-loader",
        //   {
        //     loader: "esbuild-loader",
        //     options: {
        //       loader: "css",
        //       minify: true,
        //     },
        //   },
        // ],
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
