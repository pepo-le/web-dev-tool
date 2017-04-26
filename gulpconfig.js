module.exports = {
    dist: 'dist',
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
        out: 'dist/styleguide/',
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
            src: 'dist/public/**/*.html'
        },
        ejs: {
            src: ['src/public/view/**/*.ejs', '!src/public/view/**/_*.ejs'],
            watch: ['src/public/view/**/*.ejs'],
            dest: 'dist/public'
        },
        php: {
            src: ['src/**/*.php', 'src/**/*.ctp'],
            dest: 'dist'
        },
        style: {
            src: ['src/public/sass/*.scss', '!src/public/sass/_*.scss'],
            watch: ['src/public/sass/*.scss'],
            dest: 'dist/public/css'
        },
        script: {
            src: 'src/public/js/**/*.js',
            dest: 'dist/public/js'
        },
        imagemin: {
            src: 'src/public/img/imagemin/*',
            dest: 'src/public/img'
        },
        sprite: {
            src: 'src/public/img/sprite/*.png',
            imgDest: 'src/public/img',
            scssDest: 'src/public/sass/sprite'
        },
        copy: [
            {
                from: ['src/public/img/**/*', '!src/public/img/sprite/*', '!src/public/img/imagemin/*'],
                to: 'dist/public/img'
            },
            {
                from: 'src/public/lib/**/*',
                to: 'dist/public/lib'
            },
            {
                from: 'src/**/.*',
                to: 'dist'
            }
        ]
    }
}
