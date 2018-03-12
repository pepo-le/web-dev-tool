'use strict';
/**
 * EJS経由で出力
 * プレーンなHTMLを出力する場合は積極的に活用しよう
 */
const gulp = require('gulp');
const config = require('../gulpconfig.js');
const $ = require('./plugins.js');

gulp.task('ejs', function () {
    return gulp.src(config.path.ejs.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.ejs(config.ejs, {}, { ext: config.ejs.ext }))
        .pipe(gulp.dest(config.path.ejs.dest))
        .pipe($.browser.stream());
});
