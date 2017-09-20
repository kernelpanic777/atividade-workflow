var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');

gulp.task('reduzirHTML', function(){
	return gulp.src('./source/index.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'));
});

gulp.task('compilarReduzirCSS', function(){
	return gulp.src('./source/scss/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./dist/css'));
});


gulp.task('monitorar', function(){
	gulp.watch('./source/index.html', ['reduzirHTML']);
	gulp.watch('./source/scss/*.scss', ['compilarReduzirCSS']);
});