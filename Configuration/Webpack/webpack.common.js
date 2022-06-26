const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new Dotenv({
      path: "./env/.env",
      systemvars: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts?|tsx?)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
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
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
