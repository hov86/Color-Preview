const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "js/main.js",
    publicPath: "/assets"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
              presets: ["env"]
            }
        }
      },
      {
        test: /.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: false,
                    minimize: true
                }
            },
            {
                loader: 'resolve-url-loader'
            },
            {
                loader: 'sass-loader'
            }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
}),
  ]
};