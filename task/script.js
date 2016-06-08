'use strict';

let gulp = require('gulp');
let $ = require('./plugins.js');
let config = require('../config.js');

gulp.task('script', function () {
    return gulp.src(config.path.script.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError())
        .pipe($.babel())
        .pipe(gulp.dest(config.path.script.dest));
});
