'use strict';
/**
 * 画像の圧縮
 */
let gulp = require('gulp');
let config = require('../gulpconfig.js');
let $ = require('./plugins.js');

gulp.task('imagemin', function () {
    return gulp.src(config.path.imagemin.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.imagemin())
        .pipe(gulp.dest(config.path.imagemin.dest));
});
