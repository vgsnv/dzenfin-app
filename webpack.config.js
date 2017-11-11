const path = require('path');
const webpack = require('webpack');
const buildPath = path.resolve(__dirname, 'dist');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
  filename: "[name].css",
});

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'src/index.html'), to: buildPath },
    ]),
    extractLess
  ],
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)/,
        loader: "awesome-typescript-loader",
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ]
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: 'camelCase',
              camelCase: true
            }
          },
          {
            loader: "less-loader"
          }],
        })
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      store: path.resolve(__dirname, 'src/store/'),
      views: path.resolve(__dirname, 'src/views/'),
      api: path.resolve(__dirname, 'src/api/'),
    },
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
}
