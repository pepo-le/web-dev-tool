'use strict';
/**
 * dist�f�B���N�g���ȉ����폜����
 */
let gulp = require('gulp');
let del = require('del');
let config = require('../config.js');

gulp.task('clean', function (callback) {
    del.sync([config.dist + '/*']);
    callback();
});
