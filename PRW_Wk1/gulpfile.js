/* Gulp File
================================================== */

var gulp = require('gulp');
var babel = require("gulp-babel");
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('default', function() {
  // place code for your default task here
  return gulp.src("src/main.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('scss', function() {
  var processors = [
    autoprefixer({ browsers: ['last 2 versions']}),
  ];

  return gulp.src('./scss/*.scss')
  .pipe(sass())
  .pipe(postcss(processors))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.reload({
    stream:true
  }))
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
});

gulp.task('watch', ['browser-sync', 'scss'], function() {
  gulp.watch('./scss/**/*.scss', ['scss']);
});
