'use strict';
/**
 * JavaScriptの出力
 * ファイルはマージしない
 */
let gulp = require('gulp');
let $ = require('./plugins.js');
let config = require('../gulpconfig.js');

gulp.task('script', function () {
    return gulp.src(config.path.script.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError())
        .pipe($.babel())
        .pipe(gulp.dest(config.path.script.dest))
        .pipe($.browser.stream());
});
