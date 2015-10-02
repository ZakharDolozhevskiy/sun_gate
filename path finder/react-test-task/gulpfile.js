var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var path = {
  scripts: ['assets/components/LayerList/Layers.component.jsx'],
  js: ['assets/**/**'],
  buildJS: 'build/scripts'
};

var errorHandler = function(err) {
  console.error('Error: ' + err.message);
  this.emit('end');
};

gulp.task('compileJS', function() {
  return browserify({entries: path.scripts, debug: true})
    .transform(babelify.configure({stage: 0}))
    .bundle()
    .on('error', errorHandler)
    .pipe(source('all.js'))
    .pipe(gulp.dest(path.buildJS));
});

gulp.task('watch', function() {
  gulp.watch(path.js, ['compileJS']);
});

gulp.task('default', ['compileJS','watch']);