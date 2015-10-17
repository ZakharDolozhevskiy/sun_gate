var path, conf,
    gulp = require('gulp'),
    less = require('gulp-less'),
    babelify = require('babelify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cached = require('gulp-cached'),
    browserify = require('browserify'),
    remember = require('gulp-remember'),
    browserSync =  require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    spritesmith = require('gulp.spritesmith'),
    autoprefixer = require('gulp-autoprefixer');

path = {
  less: ['layout styles/*.less', 'styles/**/*.less'],
  js: ['scripts/*.js'],
  script: 'scripts/all.js',
  icons: ['./images/*'],
  build: ['./build/styles/*.css', './build/*.html']
};

conf = {
  sprite: {
    imgName: 'i/sprite.png',
    cssName: 'i/sprite.css',
    imgPath: './images'
  }
};

gulp.task('server', function() {
  browserSync.init(path.build, {
    server: {
      baseDir: ['./build', './'],
      index: './build/index.html'
    }
  });
});

gulp.task('compile_less', function() {
  gulp.src(path.less)
    .pipe(cached())
    .pipe(sourcemaps.init())
    .pipe(less())
    .on('error', errorHandler)
    .pipe(concat('main.css'))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(remember())
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('watch', function() {
  gulp.watch(path.less, ['compile_less']);
  gulp.watch(path.js, ['compileJS']);
});

gulp.task('compileJS', function() {
  return browserify({entries: path.script, debug: true})
    .transform(babelify.configure({stage: 0}))
    .bundle()
    .on('error', errorHandler)
    .pipe(source('all.js'))
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('sprite', function() {
  var spriteData = gulp.src(path.icons)
    .pipe(spritesmith(conf.sprite));

  return spriteData.pipe(gulp.dest('./build'));
});

gulp.task('default', ['compile_less', 'compileJS', 'server', 'watch']);

function errorHandler(err) {
  notify.onError(function(err) {
    return 'Error: ' + err.message;
  }).call(this, err);

  this.end();
}