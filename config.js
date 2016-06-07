module.exports = {
    dist: 'public',
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
            src: 'public/**/*.html'
        },
        ejs: {
            src: ['src/view/**/*.ejs', 'src/view/**/_*.ejs'],
            watch: ['src/view/**/*.ejs'],
            dest: 'public'
        },
        style: {
            src: ['src/sass/*.scss', '!src/sass/_*.scss'],
            watch: ['src/sass/*.scss'],
            dest: 'public/css'
        },
        script: {
            src: 'src/js/*.js',
            dest: 'public/js'
        },
        img: {
            src: 'src/img/*',
            dest: 'public/img'
        },
    }
}
