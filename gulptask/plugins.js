'use strict';

let loader = require('gulp-load-plugins');
let browser = require('browser-sync');

let $ = loader({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
$.browser = browser;
module.exports = $;
