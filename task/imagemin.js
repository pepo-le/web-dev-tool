'use strict';

let gulp = require('gulp');
let config = require('../config.js');
let $ = require('./plugins.js');

gulp.task('imagemin', function () {
    return gulp.src(config.path.img.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.imagemin())
        .pipe(gulp.dest(config.path.img.dest));
});
