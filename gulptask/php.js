/**
 * PHPをバリデートして出力
 */
import gulp from 'gulp';
import config from '../gulpconfig.js';
import $ from './plugins.js';

import notifier from 'node-notifier';

export default function php() {
    return gulp.src(config.path.php.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.phplint('', { skipPassedFiles: true }))
        .pipe($.phplint.reporter(function(file){
            const report = file.phplintReport || {};
            if (report.error) {
                notifier.notify({
                    message: report.message+' on line '+report.line+' of '+report.filename,
                    title: 'PHP Lint',
                });
            }
        }))
        .pipe(gulp.dest(config.path.php.dest))
        .pipe($.browser.stream());
};
