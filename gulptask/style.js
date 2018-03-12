'use strict';
/**
 * SASSを使用
 * scssをコンパイルしてautoprefixerでプレフィックスをつける
 * ソースマップを出力する
 */
const gulp = require('gulp');
const config = require('../gulpconfig.js');
const $ = require('./plugins');

const merge = require('merge');
const autoprefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');

const minimist = require('minimist');
const env = minimist(process.argv.slice(2));

gulp.task('style', function () {
    config.style = config.style || {};
    const guideOptions = merge({ out: config.dist + '/styleguide/' }, config.styleguide);
    const sourcemaps = config.style.sourcemaps || 'maps';

    return gulp.src(config.path.style.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.frontnote(guideOptions))
        .pipe($.sassLint())
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError())
        .pipe($.if(env.production, $.sourcemaps.init()))
        .pipe($.sass(config.style.sass))
        .pipe($.postcss([
            autoprefixer(config.style.autoprefixer),
            cssMqpacker(config.style.mqpacker)
        ]))
        .pipe($.if(env.production, $.sourcemaps.write(sourcemaps)))
        .pipe(gulp.dest(config.path.style.dest))
        .pipe($.browser.stream({ match: '**/*.css' }));
});
