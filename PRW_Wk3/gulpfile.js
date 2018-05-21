var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat');

gulp.task('default', function() {

})

gulp.task('scss', function() {
  return gulp.src('./scss/*.scss')
  .pipe(sass())
  .pipe(concat('App.css'))
  .pipe(gulp.dest('./src/'))
})

gulp.task('watch', function() {
  gulp.watch('./scss/*.scss', ['scss'])
})
