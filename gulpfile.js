const gulp = require('gulp');
const sass = require('gulp-sass');
gulp.task('sass', () => {
	return gulp
	  .src('src/scss/*')
	  .pipe(sass())
	  .pipe(gulp.dest('dest/css/'));
})