const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/index.js']
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname , '..'), verbose: true }),
        new HtmlWebpackPlugin({
            title: 'React Template',
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'root',
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.DefinePlugin({
            'process.env': {
                'PUBLIC_URL': JSON.stringify('')
             }
         })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    optimization:{
        splitChunks:{
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                },
                venders: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    resolve: {
        alias: {
            containers: path.resolve(__dirname, '../src/containers'),
            components: path.resolve(__dirname, '../src/components'),
            router: path.resolve(__dirname, '../src/router'),
            actions: path.resolve(__dirname, '../src/actions'),
            reducers: path.resolve(__dirname, '../src/reducers'),
            utils: path.resolve(__dirname, '../src/utils'),
            images: path.resolve(__dirname, '../src/images'),
            styles: path.resolve(__dirname, '../src/styles')
        }
    }
};