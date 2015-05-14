var gulp = require('gulp'),
    less = require('gulp-less'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]}),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat');

gulp.task('watchers', function () {
    gulp.watch('app/styles/less/*.less', ['concatLess', 'less']);
});

gulp.task('concatLess', function () {
    gulp.src('app/styles/less/*.less')
        .pipe(concat('main.less'))
        .pipe(gulp.dest('app/styles/less/'));
});

gulp.task('less', function () {
    gulp.src('app/styles/less/*.less')
               .pipe(less({
                    plugins: [autoprefixPlugin]
                }))
               .pipe(gulp.dest('app/styles/css'));
});

gulp.task('serve', function () {
    var files = [
        'app/styles/css/*.css',
        'app/js/**/*.js',
        'app/index.html'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './app',
            routes: {
                "/bower_components": "bower_components"
            },
            https: true
        }
    });
});

gulp.task('default', ['watchers', 'less', 'serve']);