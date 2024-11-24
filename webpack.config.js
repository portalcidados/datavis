const path = require("path");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(pdf|jpg|png|gif|ico|webp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 9194304, // Limite de 8KB (8 * 1024 bytes)
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
        loader: "file-loader",
      },
      {
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
