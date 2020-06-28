var HtmlWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/index.html",
  filename: "index.html",
  inject: "body",
});

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.global.css$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }],
      },
      {
        test: /^((?!\.global).)*\.css/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader?modules',
        }],
      }
    ]
  },
	devServer: { 
		historyApiFallback: true,
		inline: false,
		contentBase: "./dist"
	},
  plugins: [HTMLWebpackPluginConfig],
};
