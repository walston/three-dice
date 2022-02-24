const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");

const compiler = Webpack(config);
const devServerOptions = { ...config.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

async function serve() {
  console.log("Starting server...");
  await server.start();
}

serve();
