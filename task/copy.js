'use strict';
/**
 * 複製タスク
 * config.jsで指定されたファイルを指定されたディレクトリにコピーする
 */
let gulp = require('gulp');
let config = require('../config.js');
let $ = require('./plugins.js');

gulp.task('copy', function () {
    let files = config.path.copy || [];
    files.forEach(function (file) {
        gulp.src(file.from)
            .pipe(gulp.dest(file.to));
    });
    return files;
});
