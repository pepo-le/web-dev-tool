'use strict';
/**
 * HTMLをlintの後に出力
 */
const gulp = require('gulp');
const config = require('../gulpconfig.js');
const $ = require('./plugins.js');

gulp.task('html', function () {
    return gulp.src(config.path.html.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.htmlhint(config.htmlhint))
        .pipe($.htmlhint.reporter())
        .pipe($.htmlhint.failReporter());
});
