import { join, resolve, dirname } from "node:path";
import { fileURLToPath, URL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

let config = {
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
        resolve: {
          fullySpecified: false,
        },
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
    extensions: [".js", ".jsx", ".less"],
  },
  mode: "development",
  devServer: {
    port: 8000,
    client: { progress: true },
  },
  context: __dirname,
};

if (process.env["GITPOD_WORKSPACE_ID"]) {
  config.devServer.allowedHosts = [`.gitpod.io`];
}

export default config;
