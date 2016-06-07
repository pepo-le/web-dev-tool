'use strict';
/**
 * SASSを使用
 * scssをコンパイルしてautoprefixerでプレフィックスをつける
 * ソースマップを出力する
 */
let gulp = require('gulp');
let config = require('../config.js');
let $ = require('./plugins');

let autoprefixer = require('autoprefixer');

gulp.task('style', function () {
    return gulp.src(config.path.style.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.sourcemaps.init())
        .pipe($.sass(config.style.sass))
        .pipe($.postcss([
            autoprefixer(config.style.autoprefixer)
        ]))
        .pipe($.sourcemaps.write('maps', {
            includeContent: true,
        }))
        .pipe(gulp.dest(config.path.style.dest))
});
