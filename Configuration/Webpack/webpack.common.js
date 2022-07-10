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
      // TS NODE
      {
        test: /\.(ts?|tsx?)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      // ES BUILD
      // {
      //   test: /\.(ts?|tsx?)$/,
      //   loader: "esbuild-loader",
      //   options: {
      //     loader: "tsx",
      //     target: "esnext",
      //   },
      // },
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
