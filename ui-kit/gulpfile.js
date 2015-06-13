var gulp = require('gulp'),
  browserSync =  require('browser-sync'),
  LessPluginAutoPrefix = require('less-plugin-autoprefix'),
  concat = require('gulp-concat'),
  less = require('gulp-less');

gulp.task('server', function () {
  var files = [
    './styles/*.css',
    './index.html'
  ];
  browserSync.init(files,{
    server: {
      baseDir: './'
    }
  });
});

gulp.task('less_compile', function() {
  gulp.src(['components/**/*.less','less_extensions/*.less'])
    .pipe(concat('main.less'))
    .pipe(less({ plugins: [ new LessPluginAutoPrefix() ] ,
                 paths: [ 'less_extensions/' ]
               }))
    .pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
    gulp.watch(['components/**/*.less','less_extensions/*.less'], ['less_compile']);
});

gulp.task('default',['server','watch','less_compile']);