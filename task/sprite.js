'use strict';

let gulp = require('gulp');
let config = require('../config.js');
let $ = require('./plugins.js');

gulp.task('sprite', function () {
    let spriteData = gulp.src(config.path.sprite.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.spritesmith(config.sprite));

    let imgStream = spriteData.img.pipe(gulp.dest(config.path.sprite.imgDest));
    let cssStream = spriteData.css.pipe(gulp.dest(config.path.sprite.scssDest));
    return [imgStream, cssStream];
});
