'use strict';
/**
 * html‚ğlint‚ÌŒã‚Éo—Í
 */
let gulp = require('gulp');
let $ = require('./plugins.js');
let config = require('../config.js');

gulp.task('html', function () {
    return gulp.src(config.path.html.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.htmlhint(config.htmlhint))
        .pipe($.htmlhint.reporter())
        .pipe($.htmlhint.failReporter());
});
