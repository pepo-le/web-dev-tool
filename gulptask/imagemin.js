'use strict';
/**
 * 画像の圧縮
 */
const gulp = require('gulp');
const config = require('../gulpconfig.js');
const $ = require('./plugins.js');

gulp.task('imagemin', function () {
    return gulp.src(config.path.imagemin.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.imagemin())
        .pipe(gulp.dest(config.path.imagemin.dest));
});
