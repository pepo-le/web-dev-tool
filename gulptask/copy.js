'use strict';
/**
 * 複製タスク
 * config.jsで指定されたファイルを指定されたディレクトリにコピーする
 */
const gulp = require('gulp');
const config = require('../gulpconfig.js');
const $ = require('./plugins.js');

const ms = require('merge-stream');

gulp.task('copy', function () {
    const files = config.path.copy || [];
    const stream = ms();

    files.forEach(function (file) {
        let st = gulp.src(file.from)
            .pipe(gulp.dest(file.to));
        stream.add(st);
    });

    stream.on('end', function () {
        $.browser.reload();
    });
    return stream;
});
