// const path = require('path');

// module.exports = {
//   mode: 'development',
//   devtool: 'inline-source-map',
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve('./dist'),
//   },
//   devServer: {
//     hot: true,
//     static: path.join(__dirname, './dist'),
//     open: true,
//     compress: true,
//     port: 8564,
//   },
//   performance: {
//     maxAssetSize: 1000000,
//     maxEntrypointSize: 1000000,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(gif|png|jpe?g|svg)$/i,
//         use: [
//           'file-loader',
//           {
//             loader: 'image-webpack-loader',
//             options: {
//               bypassOnDebug: true,
//               disable: true,
//             },
//           },
//         ],
//       },
//     ],
//   },
// };

const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  // context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    static: path.join(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8564
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.(png|j?g|svg|gif)?$/,
      //   use: 'file-loader'
      // },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../dist/index.html'),
      filename: 'index.html'
    })
  ]
};
