const path = require("path");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: '/',
  },  
//   plugins: [
//     new FaviconsWebpackPlugin('./src/assets/static/icons/close.svg') // svg works too!,

//   ],
plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/assets/static/icons/hook.svg', // svg works too!
      favicons: {
        appName: 'Recipes',
        appDescription: 'Recipes',
        developerName: 'Raul Ruz',
        developerURL: null, // prevent retrieving from the nearest package.json
        background: '#ddd',
        theme_color: '#333',
        icons: {
          coast: false,
          yandex: false
        }
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "error" : false,
    maxEntrypointSize: 580000,
    maxAssetSize: 580000,
  },
  devtool: "source-map",
  //   devServer: {
  //     contentBase: path.join(__dirname, "public"),
  //   },
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
    hot: true,
    static: path.resolve(__dirname, "public"),
  },
};
