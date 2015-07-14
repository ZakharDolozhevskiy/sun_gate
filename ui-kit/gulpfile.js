var path, conf,
    gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cached = require('gulp-cached'),
    remember = require('gulp-remember'),
    browserSync =  require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    spritesmith = require('gulp.spritesmith'),
    autoprefixer = require('gulp-autoprefixer');

path = {
  less: ['layout styles/*.less', 'styles/**/*.less'],
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

function errorHandler(err) {
  notify.onError(function (err) {
    return "Error: " + err.message;
  }).call(this, err);

  this.end();
}

gulp.task('server', function () {
  browserSync.init( path.build, {
    server: {
      baseDir: ['./build', './'],
      index: './build/index.html'
    }
  });
});

gulp.task('compile_less', function() {
  gulp.src(path.less)
    .pipe(sourcemaps.init())
    .pipe(cached())
    .pipe(less({paths: ['styles/']}))
    .on('error', errorHandler)
    .pipe(autoprefixer(['last 2 version']))
    .pipe(remember())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('watch', function() {
    gulp.watch(path.less, ['compile_less']);
});

gulp.task('sprite', function () {
  var spriteData = gulp.src(path.icons)
    .pipe(spritesmith(conf.sprite));

  return spriteData.pipe(gulp.dest('./build'));
});

gulp.task('default',['compile_less', 'server', 'watch']);

