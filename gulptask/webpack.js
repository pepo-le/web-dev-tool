'use strict';
/**
 * webpackで出力
 */
const gulp = require('gulp');
const config = require('../gulpconfig.js');
const $ = require('./plugins.js');

const minimist = require('minimist');
const env = minimist(process.argv.slice(2));

let webpackConfig;
if (env.production) {
    webpackConfig = require('../webpack/webpack.production.js');
} else {
    webpackConfig = require('../webpack/webpack.dev.js');
}

$.webpack = require('webpack-stream');

if (!webpackConfig.entry) {
    delete webpackConfig.entry;
}

gulp.task('webpack', function () {
    return gulp.src(config.path.script.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.webpack(webpackConfig))
        .pipe($.if(env.production, $.uglify()))
        .pipe(gulp.dest(config.path.script.dest))
        .pipe($.browser.stream());
});
