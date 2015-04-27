var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    karma = require('gulp-karma'),
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

gulp.task('karma-test', function() {
    return gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angularfire/dist/angularfire.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'app/js/**/*.js',
        'tests/spec/*.spec.js'
        ])
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
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

gulp.task('default',['server','watchers','compileLess','karma-test']);