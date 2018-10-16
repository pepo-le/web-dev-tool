/**
 * 複製タスク
 * config.jsで指定されたファイルを指定されたディレクトリにコピーする
 */
import gulp from 'gulp';
import $ from './plugins.js';

export default function copy(src, dest) {
    return gulp.src(src)
        .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
        .on('end', function () {
            $.browser.reload();
        })
        .pipe(gulp.dest(dest));
}
