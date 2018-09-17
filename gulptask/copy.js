/**
 * 複製タスク
 * config.jsで指定されたファイルを指定されたディレクトリにコピーする
 */
import gulp from 'gulp';
import config from '../gulpconfig.js';
import $ from './plugins.js';

import ms from 'merge-stream';

export default function copy() {
    const files = config.path.copy || [];
    const stream = ms();

    files.forEach(function (file) {
        let st = gulp.src(file.from)
            .pipe(gulp.dest(file.to));
        stream.add(st);
    });

    stream.on('end', function () {
        $.browser.reload();
    });
    return stream;
}
