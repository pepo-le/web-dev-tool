const app = 'app';
const assets = app + '/assets';
const webroot = app + '/public';

export default {
    app: app,
    webroot: webroot,
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
        clean: {
            // TODO: 環境に合わせて変更する
            src: [webroot + '/*', webroot + '/.*']
        },
        html: {
            // 出力先のHTMLをチェックする
            src: webroot + '/**/*.html'
        },
        ejs: {
            src: [assets + '/view/**/*.ejs', '!' + assets + '/view/**/_*.ejs'],
            watch: [assets + '/view/**/*.ejs'],
            dest: webroot
        },
        style: {
            src: [assets + '/sass/*.scss', '!' + assets + '/sass/_*.scss'],
            watch: [assets + '/sass/*.scss'],
            dest: webroot + '/css'
        },
        script: {
            src: [assets + '/js/**/*.js', '!' + assets + '/js/vendor/**/*'],
            dest: webroot + '/js'
        },
        imagemin: {
            src: assets + '/img/imagemin/*',
            dest: assets + '/img'
        },
        sprite: {
            src: assets + '/img/sprite/*',
            imgDest: assets + '/img',
            scssDest: assets + '/sass/sprite'
        },
        php: {
            src: [app + '/**/*.php', '!' + app + '/vendor/**/*'],
        },
        copy: [
            {
                // Image
                from: [
                    assets + '/img/**/*',
                    '!' + assets + '/img/imagemin/**/*',
                    '!' + assets + '/img/sprite/**/*',
                ],
                watchFlag: true,
                to: webroot + '/img'
            },
            {
                // Library
                from: [
                    assets + '/lib/**/*'
                ],
                watchFlag: true,
                to: webroot + '/lib'
            }
        ]
    }
}
