const { resolve } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtensionReloaderPlugin = require("../webpack-extension-reloader");

const mode = process.env.NODE_ENV;
module.exports = {
  mode,
  devtool: "inline-source-map",
  entry: {
    "content-script": "./src/content-script.js",
    "background": "./src/background.js"
  },
  output: {
    publicPath: ".",
    path: resolve(__dirname, "dist/"),
    filename: "[name].bundle.js",
    libraryTarget: "umd",
  },
  plugins: [
    /***********************************************************************/
    /* By default the plugin will work only when NODE_ENV is "development" */
    /***********************************************************************/
    new ExtensionReloaderPlugin({
      entries: {
        contentScript: "content-script",
        background: "background",
        // extensionPage: "popup",
      },
      // Also possible to use
      // manifest: resolve(__dirname, "manifest.json")
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'manifest.json'},
      ],
    }),
  ],
  module: {
    rules: [

    ],
  },
};
