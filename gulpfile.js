var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssnano = require('gulp-cssnano'),
	sourcemaps = require('gulp-sourcemaps'),
	gulpif = require('gulp-if'),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync');

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	})
});

gulp.task('sass', function() {
	gulp.src('app/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		// .pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(browserSync.reload({
			stream: true
		}))
		.pipe(gulp.dest('app/css'))
});

gulp.task('watch', ['sass', 'browserSync'] , function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/css/**/*.css', browserSync.reload);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);

})