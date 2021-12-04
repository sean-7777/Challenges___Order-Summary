const { join, resolve } = require("path");
module.exports = {
  entry: {
    main: "./src/",
  },
  output: {
    filename: "[name].bundle.js",
    path: join(__dirname, "public"),
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ["node_modules", resolve(__dirname, "src")],
    alias: {
      "@": resolve(__dirname, "src/components"),
      "#": resolve(__dirname, "src/containers"),
    },
    extensions: [".js", ".less"],
  },
  mode: "development",
  devServer: {
    port: 1234,
  },
  context: __dirname,
};
