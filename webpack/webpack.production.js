'use strict';
const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');

const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
});
