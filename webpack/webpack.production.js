const { merge } = require('webpack-merge');

const CommonConfig = require('./webpack.common.js');

module.exports = merge(CommonConfig, {
    mode: "production"
});
