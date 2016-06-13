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
            src: 'dist/**/*.html'
        },
        ejs: {
            src: ['src/view/**/*.ejs', 'src/view/**/_*.ejs'],
            watch: ['src/view/**/*.ejs'],
            dest: 'dist'
        },
        style: {
            src: ['src/sass/*.scss', '!src/sass/_*.scss'],
            watch: ['src/sass/*.scss'],
            dest: 'dist/css'
        },
        script: {
            src: 'src/js/*.js',
            dest: 'dist/js'
        },
        img: {
            src: 'src/img/*',
            dest: 'dist/img'
        },
        sprite: {
            src: 'src/img/sprite/*.png',
            imgDest: 'src/img/',
            scssDest: 'src/sass/'
        },
        copy: [
            {
                from: 'src/lib/**/*',
                to: 'dist/lib'
            }
        ]
    }
}
