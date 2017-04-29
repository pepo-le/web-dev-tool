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
        css: '../webroot/css/style.css',
        script: '../webroot/js/script.js',
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
            src: 'dist/webroot/**/*.html'
        },
        ejs: {
            src: ['src/webroot/view/**/*.ejs', '!src/webroot/view/**/_*.ejs'],
            watch: ['src/webroot/view/**/*.ejs'],
            dest: 'dist/webroot'
        },
        php: {
            src: ['src/**/*.php', '!src/vendor/**/*.php'],
            // CakePHP用
            // src: ['src/**/*.php', 'src/**/*.ctp', '!src/vendor/**/*.php', '!src/vendor/**/*.ctp', '!src/Plugin/**/*.php', '!src/Plugin/**/*.ctp'],
            dest: 'dist'
        },
        style: {
            src: ['src/webroot/sass/*.scss', '!src/webroot/sass/_*.scss'],
            watch: ['src/webroot/sass/*.scss'],
            dest: 'dist/webroot/css'
        },
        script: {
            src: 'src/webroot/js/**/*.js',
            dest: 'dist/webroot/js'
        },
        imagemin: {
            src: 'src/webroot/img/imagemin/*',
            dest: 'src/webroot/img'
        },
        sprite: {
            src: 'src/webroot/img/sprite/*.png',
            imgDest: 'src/webroot/img',
            scssDest: 'src/webroot/sass/sprite'
        },
        copy: [
            // All Copy
            {
                from: ['src/**/*', 'src/**/.*', '!src/vendor/**/*', '!src/vendor/**/.*', '!src/webroot/**/*.ejs', '!src/**/*.php', '!src/webroot/sass/**/*', '!src/webroot/js/**/*', '!src/webroot/img/sprite/*', '!src/webroot/img/imagemin/*'],
                watchFlag: true,
                to: 'dist'
            },
            // Composer
            {
                from: ['src/vendor/**/*', 'src/vendor/**/.*'],
                watchFlag: false,
                to: 'dist/vendor'
            },
            // CakePHP用
            // {
            //     from: ['src/**/*', 'src/**/.*', '!src/vendor/**/*', '!src/vendor/**/.*', '!src/Plugin/**/*', '!src/Plugin/**/.*', '!src/**/*.php', '!src/**/*.ctp', '!src/webroot/**/*.ejs', '!src/webroot/sass/**/*', '!src/webroot/js/**/*', '!src/webroot/img/sprite/*', '!src/webroot/img/imagemin/*'],
            //     watchFlag: true,
            //     to: 'dist'
            // },
            // {
            //     from: ['src/vendor/**/*', 'src/vendor/**/.*'],
            //     watchFlag: false,
            //     to: 'dist/vendor'
            // },
            // {
            //     from: ['src/Plugin/**/*', 'src/Plugin/**/.*'],
            //     watchFlag: false,
            //     to: 'dist/Plugin'
            // },
        ]
    }
}
