'use strict';
/**
 * distディレクトリ以下を削除する
 */
let gulp = require('gulp');
let del = require('del');
let config = require('../gulpconfig.js');

gulp.task('clean', function (callback) {
    del.sync([config.dist + '/*']);
    callback();
});
