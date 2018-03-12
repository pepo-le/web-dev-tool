'use strict';
/**
 * PHPをバリデートして出力
 */
const gulp = require('gulp');
const config = require('../gulpconfig.js');
const $ = require('./plugins.js');

const notifier = require('node-notifier');

gulp.task('php', function () {
    const stream = gulp.src(config.path.php.src)
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
        }));

    stream.on('end', function () {
        $.browser.reload();
    });
    return stream;
});
