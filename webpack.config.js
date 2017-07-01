const path = require('path');
const HtmlWebpackPluin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: [ 'react', 'react-dom' ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
        publicPath: "/"
    },

    module: {
        rules: [
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
        new HtmlWebpackPluin({
            title: 'Output Management'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css')
    ],

    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};