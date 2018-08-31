/**
 * distディレクトリ以下を削除する
 */
import gulp from 'gulp';
import config from '../gulpconfig.js';
import $ from './plugins.js';

import minimist from 'minimist';
const env = minimist(process.argv.slice(2));

export default function clean() {
    return gulp.src([config.dist + '/*', config.dist + '/.*'], { read: false })
        .pipe($.if(!env.prod, $.ignore(config.path.clean.exclude)))
        .pipe($.rimraf());
};
