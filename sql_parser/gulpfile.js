var gulp = require('gulp');

var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');
var rjs = require("gulp-r");

gulp.task('concat', function () {
    //return gulp.src('./src/**/*.js')
    //    .pipe(amdOptimize("main",{
    //        baseUrl: './src'
    //    }))
    //    .pipe(concat('application.js'))
    //    .pipe(gulp.dest('./src'));

    gulp.src('src/**/*.js')

        .pipe(rjs(
            {
                baseUrl:'./src',
                name: "main",
                out: "./src/main.js",
                removeCombined: true,
                findNestedDependencies: true
            }
        ))
        .pipe(gulp.dest('./src'))
});

gulp.task('default', ['concat']);
