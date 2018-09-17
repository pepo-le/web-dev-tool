/**
 * webrootディレクトリ以下を削除する
 */
import gulp from 'gulp';
import config from '../gulpconfig.js';
import $ from './plugins.js';

export default function clean() {
    return gulp.src([config.webroot + '/*', config.webroot + '/.*'], { read: false })
        .pipe($.rimraf());
}
