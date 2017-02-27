/*
Requirements
*/
var gulp 			= require('gulp');
var autoprefixer	= require('gulp-autoprefixer');
var sass 			= require('gulp-sass');
var browserSync		= require('browser-sync');
var reload 			= browserSync.reload;


gulp.task('server', function(){
	browserSync.init({
		proxy: "localhost/jsDesign"
	});
});

gulp.task('autoprefix', function() {
	return gulp.src('css/style.css')
	.pipe(autoprefixer({
		browsers: ['last 5 versions']
	}))
	.pipe(gulp.dest('css'));
});

gulp.task('sass', function(){
	return gulp.src('sass/style.sass')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('css'));
});

gulp.task('default',['server'], function(){
	gulp.watch('./sass/**/*.sass', ['sass']);
	gulp.watch('./css/style.css', ['autoprefix']);
	gulp.watch('./sass/**/*.sass').on('change', reload);
	gulp.watch('*.php').on('change', reload);
});