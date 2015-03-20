var gulp = require('gulp');
var concat = require('gulp-concat');
var karma = require('gulp-karma');
var coffee = require('gulp-coffee');

gulp.task('testing', function() {
    // Be sure to return the stream
    return gulp.src('test/**/ *.coffee')
        .pipe(coffee({bare: true}))
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});

gulp.task('default', ['testing']);
