const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "client", "src", "main.jsx"),
  output: {
    path: path.resolve(__dirname, "client", "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    liveReload: true,
    proxy: [
      {
        context: ["/subway"],
        target: "http://localhost:3000",
      },
    ],
    static: {
      directory: path.resolve(__dirname, "client", "public"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "client", "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|pdf)$/i,
        use: [{ loader: "file-loader" }],
      },
    ],
  },
};
