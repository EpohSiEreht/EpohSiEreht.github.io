var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    useref      = require('gulp-useref'),
    gulpIf      = require('gulp-if'),
    uglify      = require('gulp-uglify'),
    cssnano     = require('gulp-cssnano'),
    imagemin    = require('gulp-imagemin'),
    cache       = require('gulp-cache'),
    del         = require('del'),
    runSeq      = require('run-sequence');

// ------------------
// Developement Tasks
// ------------------

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
});

gulp.task('sass', function () {
  return gulp.src('assets/scss/**/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('assets/css'))
             .pipe(browserSync.reload({
               stream: true
             }));
});

gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('**/*.scss', ['sass']);
  gulp.watch('/*.html', browserSync.reload);
  gulp.watch('**/*.js', browserSync.reload);
});

// ------------------
// Optimization Tasks
// ------------------

gulp.task('useref', function () {
  return gulp.src('*.html')
             .pipe(useref())
             .pipe(gulpIf('*.js', uglify()))
             .pipe(gulpIf('*.css', cssnano()))
             .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('assets/img/**/*.+(png|jpg|gif|svg)')
             .pipe(cache(imagemin({
               interlaced: true
             })))
             .pipe(gulp.dest('dist/img'));
});

gulp.task('clean:dist', function () {
  return del.sync('dist');
});

// -----------------
//    Build Tasks
// -----------------

gulp.task('build', function (callback) {
  runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts'], callback);
});

gulp.task('default', function (callback) {
  runSequence(['sass', 'browserSync', 'watch'], callback);
});
