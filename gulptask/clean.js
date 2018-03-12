'use strict';
/**
 * distディレクトリ以下を削除する
 */
const gulp = require('gulp');
const config = require('../gulpconfig.js');

const del = require('del');

gulp.task('clean', function (callback) {
    del.sync([config.dist + '/*', config.dist + '/.*']);
    callback();
});
