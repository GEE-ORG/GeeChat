const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    mode: "development",
    output: {
        path: __dirname + '/dist',
        filename: '[name].[hash:4].js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
        },
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'GeeChat',
            template: 'index.html',
            inject: 'body',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    devtool: 'inline-source-map',
}