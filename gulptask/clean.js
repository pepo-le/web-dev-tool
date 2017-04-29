'use strict';
/**
 * distディレクトリ以下を削除する
 */
let gulp = require('gulp');
let config = require('../gulpconfig.js');

let del = require('del');

gulp.task('clean', function (callback) {
    del.sync([config.dist + '/*', config.dist + '/.*']);
    callback();
});
