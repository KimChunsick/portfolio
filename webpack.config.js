const path = require("path")
const SRC = path.resolve(__dirname, 'node_modules')
const mode = process.env.NODE_ENV || "development"

// PLUGIN
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const minimizer = mode === "production" ? [
  new OptimizeCSSAssetsPlugin(),
  new TerserPlugin({
    terserOptions: {
      compress: {
        drop_console: true,
      }
    }
  })
] : []

module.exports = {
  mode,
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "app.js",
    path: path.resolve("./dist")
  },
  devServer: {
    contentBase: path.resolve("./dist"),
    inline: true,
    hot: true,
    host: "localhost",
    port: 8081
  },
  optimization: {
    minimizer,
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "loader": "babel-loader"
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        loader: "file-loader",
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]"
        },
      },
      {
        test: /\.mp3$/,
        include: SRC,
        loader: 'file-loader',
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]"
        },
      }
    ]
  },
  resolve: {
  	alias: {
      '@': path.resolve(__dirname, 'src/')
  	}
  }
}