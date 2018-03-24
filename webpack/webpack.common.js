'use strict';
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, '../app_src/public/js'),
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, '../app_dist/public/js'),
        filename: './[name].js',
    },
    // mode: 'production',
    resolve: {
        extensions:['.ts','.js','.json']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            },
            {
                test:/\.ts$/,
                exclude: /node_modules/,
                loader:'awesome-typescript-loader'
            }
        ]
    }
}