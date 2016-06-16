'use strict';
/**
 * png画像からスプライトを作成する
 */
let gulp = require('gulp');
let config = require('../gulpconfig.js');
let $ = require('./plugins.js');

gulp.task('sprite', function () {
    let spriteData = gulp.src(config.path.sprite.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.spritesmith(config.sprite));

    let imgStream = spriteData.img.pipe(gulp.dest(config.path.sprite.imgDest));
    let cssStream = spriteData.css.pipe(gulp.dest(config.path.sprite.scssDest));
    return [imgStream, cssStream];
});
