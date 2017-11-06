var gulp = require('gulp')
	sass = require('gulp-sass')
	babel = require("gulp-babel")
	sourcemaps = require('gulp-sourcemaps')
	browserSync = require('browser-sync').create();

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var sassSources = './scss/**/*.scss';
var sassOutput = './app/css';
var htmlSource = 'app/**/*.html';
var jsOutput = './app/js';
var src = [
	'./app/js/react-components/*.js',
	'./app/js/react-components/*.jsx'
];

gulp.task('serve', ['sass', 'jsx'], function() {
    browserSync.init({
        server: "./app"
    });
    gulp.watch(sassSources, ['sass']);
		gulp.watch(src, ['jsx']);
    gulp.watch(htmlSource).on('change', browserSync.reload);
});

gulp.task('sass', function(){
	return gulp.src(sassSources)
	.pipe(sourcemaps.init())
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(sassOutput))
	.pipe(browserSync.stream());
});

gulp.task('jsx', function(){
	return gulp.src(src)
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: [
				'env',
				'react'
			]
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(jsOutput));
});

gulp.task('default', ['serve']);
