import gulp from 'gulp';
import watch from 'gulp-watch';
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

gulp.task('html', html);
gulp.task('ejs', ejs);
gulp.task('style', style);
gulp.task('webpack', webpack);
gulp.task('script', script);
gulp.task('imagemin', imagemin);
gulp.task('sprite', sprite);
gulp.task('php', php);
gulp.task('copy', copy);
gulp.task('server', server);
gulp.task('clean', clean);

gulp.task('watch', function () {
    watch(config.path.html.src, html);
    watch(config.path.ejs.src, ejs);
    watch(config.path.style.watch, style);
    watch(config.path.php.src, php);
    watch(config.path.script.src, webpack);
    // watch(config.path.script.src, script);
    // // 複製タスクはループで回して監視対象とする
    const copyfiles = config.path.copy || [];
    copyfiles.forEach(function (filepath) {
        if (filepath.watchFlag) {
            watch(filepath.from, copy);
        }
    });
});

gulp.task('build', gulp.series('clean', gulp.parallel('html', 'ejs', 'style', 'php', 'webpack'), 'copy'));
gulp.task('default', gulp.series('build', gulp.parallel('server', 'watch')));
