'use strict';
/**
 * webpackで出力
 */
let gulp = require('gulp');
let $ = require('./plugins.js');
let config = require('../gulpconfig.js');

let webpackConfig = require('../webpack.config.js');

if (!webpackConfig.entry) {
    delete webpackConfig.entry;
}

gulp.task('webpack', function () {
    return gulp.src(config.path.script.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.webpack(webpackConfig))
        .pipe(gulp.dest(config.path.script.dest))
        .pipe($.browser.stream());
});
