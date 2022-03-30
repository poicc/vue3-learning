const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const uglifyJsPlugin = require("uglify-webpack-plugin")

//适用于vue Loader版本15以上 需要一下插件支持
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /{node_modules}/,
                options: {
                    presets: [
                        [
                            'env', {
                                targets: {
                                    browers: ['>1%', 'last 2 version', "not ie<=8"]
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {

    },
    plugins:[
        new htmlWebpackPlugin({
            template: "index/html"
        }),
        new uglifyJsPlugin()
    ],
    devServer: {
        contentBse: "./dist",
        inline: true,
        port: 7777
    }
}