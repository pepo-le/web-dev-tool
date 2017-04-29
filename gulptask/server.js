'use strict';
/**
 * browser-syncで自動リロード
 */
let gulp = require('gulp');
let config = require('../gulpconfig.js');
let $ = require('./plugins.js');
let merge = require('merge');

gulp.task('server', function () {
    let options = merge(config.browser, {
        server: {
            baseDir: config.dist + '/webroot',
            directory: false
        },
        ui: {
            port: 8080
        },
        notify: false
    });
    if (options.proxy.target) {
        delete options.server;
    } else {
        delete options.proxy;
    }
    return $.browser(options);
});

gulp.task('reload', function () {
    return $.browser.reload();
});
