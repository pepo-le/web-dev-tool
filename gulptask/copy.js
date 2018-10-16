/**
 * 複製タスク
 * config.jsで指定されたファイルを指定されたディレクトリにコピーする
 */
import gulp from 'gulp';
import $ from './plugins.js';

export default function copy(src, dest) {
    return gulp.src(src)
        .on('end', function () {
            $.browser.reload();
        })
        .pipe(gulp.dest(dest));
}
