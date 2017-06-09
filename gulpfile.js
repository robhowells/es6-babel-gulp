var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
	return gulp.src('src/app.js')
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('babel', function() {
	return gulp.src('src/app.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['lint', 'babel'], function() {
    gulp.watch('src/app.js', ['lint', 'babel']);
});