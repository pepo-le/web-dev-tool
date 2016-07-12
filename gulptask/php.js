'use strict';
/**
 * PHPをバリデートして出力
 */
let gulp = require('gulp');
let config = require('../gulpconfig.js');
let $ = require('./plugins.js');

let notifier = require('node-notifier');

gulp.task('php', function () {
    //return gulp.src(config.path.php.src)
    let stream = gulp.src(config.path.php.src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .pipe($.phplint('', { skipPassedFiles: true }))
        .pipe($.phplint.reporter(function(file){
            var report = file.phplintReport || {};
            if (report.error) {
                notifier.notify({
                    message: report.message+' on line '+report.line+' of '+report.filename,
                    title: 'PHP Lint',
                });
            }
        }))
        .pipe(gulp.dest(config.path.php.dest));
        //.pipe($.browser.stream());

    stream.on('end', function () {
        $.browser.reload();
    });
    return stream;
});
