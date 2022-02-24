const path = require("path");
const { SourceMapDevToolPlugin } = require("webpack");

const prod = process.env.NODE_ENV === "production";
if (prod) console.log("Building in production");

module.exports = {
  entry: "./src/index.ts",
  mode: prod ? "production" : "development",
  devtool: prod ? undefined : "inline-source-map",
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }],
  },
  plugins: [new SourceMapDevToolPlugin()],
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
