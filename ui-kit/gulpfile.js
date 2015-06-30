var path,
    gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    postcss = require('gulp-postcss'),
    browserSync =  require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer-core');

path = {
        less: ['layout styles/*.less', 'styles/**/*.less']
    };

gulp.task('server', function () {
  var files = [
    '..build/styles/*.css',
    './index.html'
  ];
  browserSync.init(files,{
    server: {
      baseDir: './'
    }
  });
});

gulp.task('less_compile', function() {
  gulp.src(path.less)
    .pipe(sourcemaps.init())
      .pipe(less({paths: ['styles/']}))
      .pipe(concat('main.css'))
      .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('watch', function() {
    gulp.watch(path.less, ['less_compile']);
});

gulp.task('default',['server','watch','less_compile']);