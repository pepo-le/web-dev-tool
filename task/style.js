'use strict';
/**
 * SASS���g�p
 * scss���R���p�C������autoprefixer�Ńv���t�B�b�N�X������
 * �\�[�X�}�b�v���o�͂���
 */
let gulp = require('gulp');
let config = require('../config.js');
let $ = require('./plugins');

let autoprefixer = require('autoprefixer');
let cssMqpacker = require('css-mqpacker');

gulp.task('style', function () {
    return gulp.src(config.path.style.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.sassLint())
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError())
        .pipe($.sourcemaps.init())
        .pipe($.sass(config.style.sass))
        .pipe($.postcss([
            autoprefixer(config.style.autoprefixer),
            cssMqpacker(config.style.mqpacker)
        ]))
        .pipe($.sourcemaps.write('maps', {
            includeContent: true,
        }))
        .pipe(gulp.dest(config.path.style.dest));
});
