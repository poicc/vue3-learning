// const path = require("path");
// const htmlWebpackPlugin = require("html-webpack-plugin");
// const uglifyJsPlugIn = require("uglifyjs-webpack-plugin");

// // 适用于Vue loader 版本 15以上，需要下面的插件支持
// // const VueLoaderPlugin = require('vue-loader/lib/plugin');

// module.exports = {
//   entry: "./src/main.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css/,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.less$/,
//         use: [
//           { loader: "style-loader" },
//           { loader: "css-loader" },
//           { loader: "less-loader" },
//         ],
//       },
//       {
//         test: /\.(png|jpg|gif|jpeg)$/,
//         use: [
//           {
//             loader: "url-loader",
//             options: {
//               limit: 10240,
//               name: "img/[name].[hash:8].[ext]",
//             },
//           },
//         ],
//       },
//       {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.vue$/,
//         use: ["vue-loader"],
//       },
//     ],
//   },
//   resolve: {
//     alias: {
//       vue$: "vue/dist/vue.esm.js",
//     },
//   },
//   plugins: [
//     new htmlWebpackPlugin({
//       template: "index.html",
//     }),
//     new uglifyJsPlugIn(),
//   ],
//   devServer: {
//     contentBase: "./dist",
//     inline: true,
//     port: 8888,
//   },
// };
