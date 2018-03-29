const src = 'app_src';
const dist = 'app_dist';
// webroot
const src_webroot = src + '/public';
const dist_webroot = dist + '/public';

export default {
    dist: dist,
    webroot: dist_webroot,
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
        out: dist + '/styleguide/',
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
            exclude: ['node_modules', 'vendor']
        },
        html: {
            // 出力先のHTMLをチェックする
            src: dist_webroot + '/**/*.html'
        },
        ejs: {
            src: [src_webroot + '/view/**/*.ejs', '!' + src_webroot + '/view/**/_*.ejs'],
            watch: [src_webroot + '/view/**/*.ejs'],
            dest: dist_webroot
        },
        style: {
            src: [src_webroot + '/sass/*.scss', '!' + src_webroot + '/sass/_*.scss'],
            watch: [src_webroot + '/sass/*.scss'],
            dest: dist_webroot + '/css'
        },
        script: {
            src: [src_webroot + '/js/**/*.js', '!' + src_webroot + '/js/vendor/**/*'],
            dest: dist_webroot + '/js'
        },
        imagemin: {
            src: src_webroot + '/img/imagemin/*',
            dest: src_webroot + '/img'
        },
        sprite: {
            src: src_webroot + '/img/sprite/*',
            imgDest: src_webroot + '/img',
            scssDest: src_webroot + '/sass/sprite'
        },
        php: {
            src: [src + '/**/*.php', '!' + src + '/vendor/**/*'],
            dest: dist + '/'
        },
        copy: [
            {
                // All
                from: [
                    src + '/**/*',
                    src + '/**/.*',
                    '!' + src_webroot + '/view/**/*',
                    '!' + src_webroot + '/img/imagemin/**/*',
                    '!' + src_webroot + '/img/sprite/**/*',
                    '!' + src_webroot + '/node_modules/**/*',   // node
                    '!' + src + '/vendor/**/*'    // composer
                ],
                watchFlag: true,
                to: dist,
                devIgnore: false
            },
            {
                // Composer
                from: [
                    src + '/vendor/**/*'
                ],
                watchFlag: false,
                to: dist + '/vendor',
                devIgnore: true
            },
            {
                // Node
                from: [
                    src + '/node_modules/**/*'
                ],
                watchFlag: false,
                to: dist + '/node_modules',
                devIgnore: true
            }
        ]
    }
}
