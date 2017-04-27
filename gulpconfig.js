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
            src: ['src/**/*.php', 'src/**/*.ctp', '!src/vendor/**/*.php', '!src/Plugin/**/*.php', '!src/vendor/**/*.ctp', '!src/Plugin/**/*.ctp'],
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
            // CakePHP用
            //{
            //    from: ['src/**/*', 'src/**/.*', '!src/Controller/**/*.php', '!src/Model/**/*.php', '!src/View/**/*.php', '!src/View/**/*.ctp', '!src/webroot/**/*.php', '!src/Test/**/*.php', '!src/Test/**/*.ctp', '!src/webroot/**/*.ejs', '!src/webroot/sass/**/*', '!src/webroot/js/**/*', '!src/webroot/img/sprite/*', '!src/webroot/img/imagemin/*'],
            //    to: 'dist'
            //},
            {
                from: 'src/**/.*', // dotfile
                to: 'dist'
            },
            {
                from: ['src/webroot/img/**/*', '!src/webroot/img/sprite/*', '!src/webroot/img/imagemin/*'],
                to: 'dist/webroot/img'
            },
            {
                from: 'src/webroot/lib/**/*',
                to: 'dist/webroot/lib'
            }
        ]
    }
}
