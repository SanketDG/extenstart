const path = require("path");
const ExtensionReloader = require("webpack-extension-reloader");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV;
module.exports = {
  mode,
  devtool: "inline-source-map",
  watch: true,
  entry: {
    "content-script": "./src/content-script.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new ExtensionReloader(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'manifest.json' },
      ]
    }),
  ],
};
