const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    app: "/index.js",
    transaction: "../models/transaction.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackPwaManifest({
      name: "Budget Tracker",
      short_name: "Budget",
      description: "An application that allows you to view and keep track of your spending.",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [{
        src: path.resolve("public/icons/icon-192x192.png"),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join("public", "icons")
      }]
    })
  ]
};

module.exports = config;
