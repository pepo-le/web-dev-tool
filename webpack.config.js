'use strict';
let webpack = require('webpack');

module.exports = {
    entry: '',
    output: {
        filename: '[name].js',
        sourceMapFilename: 'maps/[name].map'
    },
    devtool: 'source-map',
    resolve: {
        modulesDirectories: [
            'node_modules'
        ]
    },
    module: {
        preLoaders: [
            { test: /\.js$/, exclude:/node_modules/, loaders: ['eslint'] },
        ],
        loaders: [
            { test: /\.jsx?$/, exclude:/node_modules/, loaders: ['babel'] },
        ]
    },
    plugins: [
        // 圧縮・難読化
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
