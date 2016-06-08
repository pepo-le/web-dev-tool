'use strict';
/**
 * �����^�X�N
 * config.js�Ŏw�肳�ꂽ�t�@�C�����w�肳�ꂽ�f�B���N�g���ɃR�s�[����
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
