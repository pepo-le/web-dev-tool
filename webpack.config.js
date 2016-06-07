'use strict';
let webpack = require('webpack');

module.exports = {
    entry: '',
    output: {
        path: __dirname + 'public',
        filename: '[name].js',
        sourceMapFilename: 'maps/[name].map'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            { test: /\.js$/, exclude:/node_modules/, loaders: ['eslint'] },
        ],
        loaders: [
            { test: /\.jsx?$/, exclude:/node_modules/, loaders: ['babel'] },
        ]
    },
    plugins: [
        // ���k�E��ǉ�
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
