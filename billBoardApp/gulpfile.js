var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 50 versions"]});

gulp.task('watchers', function () {
    gulp.watch('app/styles/less/*.less', ['compileLess']);
});

gulp.task('compileLess', function() {
    return gulp.src('app/styles/less/*.less')
        .pipe(less({
            plugins: [autoprefixPlugin]
        }))
        .pipe(gulp.dest('app/styles/css'));
});

gulp.task('server', function () {
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
            }
        }

    });
});

gulp.task('default',['server','watchers','compileLess']);