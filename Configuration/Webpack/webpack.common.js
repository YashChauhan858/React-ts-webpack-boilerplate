const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts?|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: [
          //     "@babel/preset-env",
          //     "@babel/preset-react",
          //     "@babel/preset-typescript",
          //   ],
          //   plugins: ["@babel/plugin-transform-runtime"],
          // },
        },
      },
      {
        test: /.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /.svg$/,
        use: [
          {
            loader: "svg-url-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
