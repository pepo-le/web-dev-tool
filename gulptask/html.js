'use strict';
/**
 * HTMLをlintの後に出力
 */
let gulp = require('gulp');
let $ = require('./plugins.js');
let config = require('../gulpconfig.js');

gulp.task('html', function () {
    return gulp.src(config.path.html.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.htmlhint(config.htmlhint))
        .pipe($.htmlhint.reporter())
        .pipe($.htmlhint.failReporter());
});
