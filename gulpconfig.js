import path from 'path';

const app = 'app';
const sources = app + '/sources';
const webroot = app + '/dist';

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
            src: [sources + '/view/**/*.ejs', '!' + sources + '/view/**/_*.ejs'],
            watch: [sources + '/view/**/*.ejs'],
            dest: webroot
        },
        style: {
            src: [sources + '/sass/**/*.scss'],
            watch: [sources + '/sass/**/*.scss'],
            dest: webroot + '/css'
        },
        script: {
            src: [sources + '/js/**/*.js', '!' + sources + '/js/node_modules/**/*'],
            watch: [sources + '/js/**/*.js', '!' + sources + '/js/node_modules/**/*'],
            dest: webroot + '/js'
        },
        webpack: {
            // 詳細はwebpack/以下のファイルで指定する
            context: path.resolve(__dirname, 'app/sources/js'),
            entry: './main.js',
            output: {
                publicPath: '/',
                path: path.resolve(__dirname, 'app/dist/js'),
                filename: './[name].js'
            },
            watch: [sources + '/js/**/*.ts', '!' + sources + '/js/node_modules/**/*']
        },
        imagemin: {
            src: sources + '/img/imagemin/*',
            dest: sources + '/img'
        },
        sprite: {
            src: sources + '/img/sprite/*',
            imgDest: sources + '/img',
            scssDest: sources + '/sass/sprite'
        },
        php: {
            src: [app + '/**/*.php', '!' + app + '/vendor/**/*'],
        },
        copy: [
            {
                // Image
                from: [
                    sources + '/img/**/*',
                    '!' + sources + '/img/imagemin/**/*',
                    '!' + sources + '/img/sprite/**/*',
                ],
                watchFlag: true,
                to: webroot + '/img'
            },
            {
                // Library
                from: [
                    sources + '/lib/**/*'
                ],
                watchFlag: true,
                to: webroot + '/lib'
            }
        ]
    }
}
