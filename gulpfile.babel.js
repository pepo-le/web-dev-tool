import gulp from 'gulp';
import watch from 'gulp-watch';
import ms from 'merge-stream';

import config from './gulpconfig.js';

import html from './gulptask/html.js';
import ejs from './gulptask/ejs.js';
import style from './gulptask/style.js';
import webpack from './gulptask/webpack.js';
import script from './gulptask/script.js';
import imagemin from './gulptask/imagemin.js';
import sprite from './gulptask/sprite.js';
import php from './gulptask/php.js';
import copy from './gulptask/copy.js';
import server from './gulptask/server.js';
import clean from './gulptask/clean.js';

const copyfiles = config.path.copy || [];

gulp.task('html', html);
gulp.task('ejs', ejs);
gulp.task('style', style);
gulp.task('webpack', webpack);
gulp.task('script', script);
gulp.task('imagemin', imagemin);
gulp.task('sprite', sprite);
gulp.task('php', php);
gulp.task('copy', copy);
gulp.task('copy_init', function () {
    const stream = ms();
    copyfiles.forEach(function (copyfiles) {
        stream.add(copy(copyfiles.from, copyfiles.to));
    });
    return stream;
});
gulp.task('server', server);
gulp.task('clean', clean);

gulp.task('watch', function () {
    watch(config.path.html.src, html);
    watch(config.path.ejs.src, ejs);
    watch(config.path.style.watch, style);
    watch(config.path.php.src, php);
    watch(config.path.script.src, webpack);
    // watch(config.path.script.src, script);
    // 複製タスクはループで回して監視対象とする
    copyfiles.forEach(function (copyfiles) {
        if (copyfiles.watchFlag) {
            watch(copyfiles.from, function () {
                return copy(copyfiles.from, copyfiles.to);
            });
        }
    });
});

gulp.task('build', gulp.series('clean', gulp.parallel('html', 'ejs', 'style', 'php', 'webpack'), 'copy_init'));
gulp.task('default', gulp.series('build', gulp.parallel('server', 'watch')));
