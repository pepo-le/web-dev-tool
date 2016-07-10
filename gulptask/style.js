'use strict';
/**
 * SASSを使用
 * scssをコンパイルしてautoprefixerでプレフィックスをつける
 * ソースマップを出力する
 */
let gulp = require('gulp');
let config = require('../gulpconfig.js');
let $ = require('./plugins');

let merge = require('merge');
let autoprefixer = require('autoprefixer');
let cssMqpacker = require('css-mqpacker');

gulp.task('style', function () {
    config.style = config.style || {};
    let guideOptions = merge({ out: config.dist + '/styleguide/' }, config.styleguide);
    let sourcemaps = config.style.sourcemaps || 'maps';

    return gulp.src(config.path.style.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.frontnote(guideOptions))
        .pipe($.sassLint())
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError())
        .pipe($.sourcemaps.init())
        .pipe($.sass(config.style.sass))
        .pipe($.postcss([
            autoprefixer(config.style.autoprefixer),
            cssMqpacker(config.style.mqpacker)
        ]))
        .pipe($.sourcemaps.write(sourcemaps))
        .pipe(gulp.dest(config.path.style.dest))
        .pipe($.browser.stream({ match: '**/*.css' }));
});
