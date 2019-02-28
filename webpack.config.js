const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 4000;

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path:path.join(__dirname,'/dist'),
        filename: 'index_bundle .js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            { test: /\.html$/i, loader: 'html-loader' },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test:  /\.(gif|png|jpe?g|svg)$/i,
                use: {
                    loader: "file-loader",
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
};
