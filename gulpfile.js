"use strict";

let gulp = require('gulp');
let runSequence = require('run-sequence');
let requireDir = require('require-dir');
let config = require('./gulpconfig.js');

requireDir('./gulptask', { recurse: true });

gulp.task('watch', function () {
    gulp.watch(config.path.html.src, ['html']);
    gulp.watch(config.path.ejs.watch, ['ejs']);
    gulp.watch(config.path.php.src, ['php']);
    gulp.watch(config.path.style.watch, ['style']);
    // JavaScript処理の選択
    gulp.watch(config.path.script.src, ['script']);
    //gulp.watch(config.path.script.src, ['webpack']);
    // 複製タスクはループで回して監視対象とする
    var copyfiles = config.path.copy || [];
    copyfiles.forEach(function (filepath) {
        if (filepath.watchFlag) {
            gulp.watch(filepath.from, ['copy']);
        }
    });
    // テスト用（通常は使わない）
    // gulp.watch(config.dist + '/**/*', ['reload']);
});

gulp.task('build', ['clean'], function (callback) {
    return runSequence(['html', 'ejs', 'php', 'style', 'script', 'copy'], callback);
    //return runSequence(['html', 'ejs', 'php', 'style', 'webpack', 'copy'], callback);
});

gulp.task('default', function () {
    return runSequence('build', 'server', 'watch');
});
