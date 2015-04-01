var gulp = require('gulp');
var less = require('gulp-less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});
var browserSync = require('browser-sync');

gulp.task('watchers', function () {
    gulp.watch('app/styles/less/*.less', ['less']);
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
            }
        }

    });
});

gulp.task('default', ['watchers', 'less', 'serve']);