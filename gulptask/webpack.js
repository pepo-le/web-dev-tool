/**
 * webpackで出力
 */
import gulp from 'gulp';
import config from '../gulpconfig.js';
import $ from './plugins.js';

import minimist from 'minimist';
const env = minimist(process.argv.slice(2));

import wp from 'webpack'
import wps from 'webpack-stream';
$.webpackStream = wps;

let webpackConfig;
if (env.production) {
    webpackConfig = require('../webpack/webpack.production.js');
} else {
    webpackConfig = require('../webpack/webpack.dev.js');
}

if (!webpackConfig.entry) {
    delete webpackConfig.entry;
}

export default function webpack() {
    return gulp.src(config.path.script.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.webpackStream(webpackConfig, wp))
        .pipe(gulp.dest(config.path.script.dest))
        .pipe($.browser.stream());
}
