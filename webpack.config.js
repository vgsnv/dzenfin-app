const path = require("path");
const webpack = require("webpack");
const buildPath = path.resolve(__dirname, "dist");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
  filename: "[name].css"
});

const watchIgnorePlugin = new webpack.WatchIgnorePlugin([/less\.d\.ts$/]);

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, "src/index.html"), to: buildPath },
      { from: path.resolve(__dirname, "src/cssreset.css"), to: buildPath },
      {
        from: path.resolve(
          __dirname,
          "node_modules/react/umd/react.development.js"
        ),
        to: path.resolve(buildPath, "vendor")
      },
      {
        from: path.resolve(
          __dirname,
          "node_modules/react-dom/umd/react-dom.development.js"
        ),
        to: path.resolve(buildPath, "vendor")
      }
    ]),
    watchIgnorePlugin,
    extractLess
  ],
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)/,
        loader: "awesome-typescript-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")]
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [
            {
              loader: "typings-for-css-modules-loader",
              options: {
                modules: true,
                namedExport: "camelCase",
                camelCase: true
              }
            },
            {
              loader: "less-loader"
            }
          ]
        })
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      ui: path.resolve(__dirname, "src/ui/"),
      store: path.resolve(__dirname, "src/store/"),
      views: path.resolve(__dirname, "src/views/"),
      api: path.resolve(__dirname, "src/api/"),
      config: path.resolve(__dirname, "src/config.ts"),
      apphistory: path.resolve(__dirname, "src/apphistory.ts")
    },
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
