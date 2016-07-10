"use strict";

let gulp = require('gulp');
let runSequence = require('run-sequence');
let requireDir = require('require-dir');
let config = require('./gulpconfig.js');

requireDir('./gulptask', { recurse: true });

gulp.task('watch', function () {
    gulp.watch(config.path.html.src, ['html']);
    gulp.watch(config.path.ejs.watch, ['ejs']);
    gulp.watch(config.path.style.watch, ['style']);
    // JavaScript処理の選択
    gulp.watch(config.path.script.src, ['script']);
    //gulp.watch(config.path.script.src, ['webpack']);
    // 複製タスクはループで回して監視対象とする
    var copyfiles = config.path.copy || [];
    copyfiles.forEach(function (filepath) {
        gulp.watch(filepath.from, ['copy']);
    });
    //gulp.watch(config.dist + '/**/*', ['reload']);
});

gulp.task('build', ['clean'], function (callback) {
    return runSequence(['html', 'ejs', 'style', 'script', 'copy'], callback);
    //return runSequence(['html', 'ejs', 'style', 'webpack', 'copy'], callback);
});

gulp.task('default', function () {
    return runSequence('build', 'server', 'watch');
});
