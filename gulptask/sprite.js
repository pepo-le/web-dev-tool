'use strict';
/**
 * png画像からスプライトを作成する
 */
const gulp = require('gulp');
const config = require('../gulpconfig.js');
const $ = require('./plugins.js');

const ms = require('merge-stream');

gulp.task('sprite', function () {
    const spriteData = gulp.src(config.path.sprite.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.spritesmith(config.sprite));

    const imgStream = spriteData.img.pipe(gulp.dest(config.path.sprite.imgDest));
    const cssStream = spriteData.css.pipe(gulp.dest(config.path.sprite.scssDest));
    return ms(imgStream, cssStream);
});
