'use strict';
/**
 * gulpから始まるモジュールを$.<module>で読み込めるようにする
 */
const loader = require('gulp-load-plugins');
const browser = require('browser-sync');

const $ = loader({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
$.browser = browser;
module.exports = $;
