'use strict';
/**
 * distディレクトリ以下を削除する
 */
import gulp from 'gulp';
import config from '../gulpconfig.js';
import $ from './plugins.js';

export default function clean() {
    return gulp.src([config.dist + '/*', config.dist + '/.*'], { read: false })
        .pipe($.ignore('node_modules/**'))
        .pipe($.rimraf());
};
