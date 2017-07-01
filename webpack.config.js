const path = require('path');
const HtmlWebpackPluin = require('html-webpack-plugin'); // create HTML

const HtmlWebpackPluinConfig = new HtmlWebpackPluin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "build.js"
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["es2017", "react"]
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },

    plugins: [
        HtmlWebpackPluinConfig,
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css')
    ],

    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};