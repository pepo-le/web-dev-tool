const { merge } = require('webpack-merge');

const CommonConfig = require('./webpack.common.js');

module.exports = merge(CommonConfig, {
    devtool: 'inline-source-map',
    mode: 'development'
});
