var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    babel = require('gulp-babel'),
    eslint = require('gulp-eslint');

var paths = {
    js: {
        src: 'src/**/*.js',
        dist: 'dist',
        temp: '.tmp'
    }
}

gulp.task('lint', function() {
    return gulp.src(paths.js.src)
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('babel', function() {
    return gulp.src(paths.js.src)
        .pipe(babel())
        .pipe(gulp.dest(paths.js.temp));
});

gulp.task('browserify', function() {
    return browserify('./' + paths.js.temp +'/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest(paths.js.dist));
});

gulp.task('watch', ['lint', 'babel', 'browserify'], function() {
    gulp.watch(paths.js.src, ['lint', 'babel', 'browserify']);
});
