'use strict';
/**
 * JavaScriptの出力
 * ファイルはマージしない
 */
const gulp = require('gulp');
const config = require('../gulpconfig.js');
const $ = require('./plugins.js');

const minimist = require('minimist');
const env = minimist(process.argv.slice(2));

gulp.task('script', function () {
    return gulp.src(config.path.script.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.if(env.production, $.sourcemaps.init()))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError())
        .pipe($.babel())
        .pipe($.if(env.production, $.uglify()))
        .pipe($.if(env.production, $.sourcemaps.write()))
        .pipe(gulp.dest(config.path.script.dest))
        .pipe($.browser.stream());
});
