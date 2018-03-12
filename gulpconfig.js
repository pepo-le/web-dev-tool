const app = 'app';
const webroot = app + '/public';
const src = 'src';

module.exports = {
    dist: webroot,
    htmlhint: '.htmlhintrc',
    ejs: {
        ext: '.html'
    },
    style: {
        sass: {
            outputStyle: 'compressed'
        },
        autoprefixer: {
            browsers: ['last 3 version', 'ie >= 9', 'Android 4.0'],
            ignore: []
        },
        mqpacker: {}
    },
    sprite: {
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        imgPath: '../img/sprite.png',
        cssFormat: 'scss',
        cssVarMap: function (sprite) {
            sprite.name = 'sprite-' + sprite.name;
        }
    },
    styleguide: {
        out: webroot + '/styleguide/',
        css: '../public/css/style.css',
        script: '../public/js/script.js',
        clean: true
    },
    browser: {
        proxy: {
            target: ''
        },
        ghostMode: {
            clicks: false,
            location: false,
            forms: false,
            scroll: false
        }
    },
    path: {
        srcRoot: 'src',
        html: {
            // 出力先のHTMLをチェックする
            src: webroot + '/**/*.html'
        },
        ejs: {
            src: [src + '/view/**/*.ejs', '!' + src + '/view/**/_*.ejs'],
            watch: [src + '/view/**/*.ejs'],
            dest: webroot
        },
        style: {
            src: [src + '/sass/*.scss', '!' + src + '/sass/_*.scss'],
            watch: [src + '/sass/*.scss'],
            dest: webroot + '/css'
        },
        script: {
            src: [src + '/js/**/*.js', '!' + src + '/js/vendor/**/*'],
            dest: webroot + '/js'
        },
        imagemin: {
            src: src + '/img/imagemin/*',
            dest: src + '/img'
        },
        sprite: {
            src: src + '/img/sprite/*',
            imgDest: src + '/img',
            scssDest: src + '/sass/sprite'
        },
        php: {
            src: [app + '/**/*.php', '!' + app + '/vendor/**/*.php'],
        },
        copy: [
            {
                // image
                from: [
                    src + '/img/**/*',
                    '!' + src + '/img/imagemin/**/*',
                    '!' + src + '/img/sprite/**/*'
                ],
                watchFlag: true,
                to: webroot + '/img'
            },
            {
                // library
                from: [
                    src + '/lib/**/*',
                ],
                watchFlag: true,
                to: webroot + '/lib'
            }
        ]
    }
}
