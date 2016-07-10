'use strict';
/**
 * 複製タスク
 * config.jsで指定されたファイルを指定されたディレクトリにコピーする
 */
let gulp = require('gulp');
let config = require('../gulpconfig.js');
let $ = require('./plugins.js');

let ms = require('merge-stream');

gulp.task('copy', function () {
    let files = config.path.copy || [];
    let stream = ms();
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
