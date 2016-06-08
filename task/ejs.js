'use strict';

let gulp = require('gulp');
let config = require('../config.js');
let $ = require('./plugins.js');

gulp.task('ejs', function () {
    return gulp.src(config.path.ejs.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.ejs(config.ejs, { ext: config.ejs.ext }))
        .pipe(gulp.dest(config.path.ejs.dest));
});
