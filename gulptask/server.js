'use strict';
/**
 * browser-syncで自動リロード
 */
const gulp = require('gulp');
const config = require('../gulpconfig.js');
const $ = require('./plugins.js');

const merge = require('merge');

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
