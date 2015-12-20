var gulp      = require('gulp');
var sass      = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var concat    = require('gulp-concat');
var webserver = require('gulp-webserver')

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('compress', function() {
  gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('dist'));
})

gulp.task('default', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('css/*.css', ['compress']);
});

gulp.task('serve', function() {
  gulp.src('app')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      directoryListing: true,
      open: true
    }))
})