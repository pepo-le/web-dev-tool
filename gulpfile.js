"use strict";

let gulp = require('gulp');
let runSequence = require('run-sequence');
let requireDir = require('require-dir');
let config = require('./config.js');

requireDir('./task', { recurse: true });

gulp.task('watch', function () {
    gulp.watch(config.path.html.src, ['html']);
    gulp.watch(config.path.ejs.watch, ['ejs']);
    gulp.watch(config.path.style.watch, ['style']);
    gulp.watch(config.path.script.src, ['script']);

    gulp.watch(config.dist + '/**/*', ['reload']);
});

gulp.task('build', ['clean'], function (callback) {
    return runSequence(['html', 'ejs', 'style', 'script'], callback);
});

gulp.task('default', function () {
    return runSequence('build', 'server', 'watch');
});
