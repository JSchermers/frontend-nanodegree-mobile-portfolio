var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
var htmlmin = require('gulp-htmlmin');
var del = require('del'); // rm -rf
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var rename = require("rename");

gulp.task('clean', function(cb) {
    del(['dist'], cb);
});

gulp.task('compress',['clean'], function() {
    var stream =gulp.src('js/perfmatters.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    return stream;
});

gulp.task('cssmin',['clean'], function () {
    var stream = gulp.src('css/*.css')
        .pipe(cssmin())

        .pipe(gulp.dest('dist/css'));
    return stream;
});

gulp.task('html-min', ['clean'], function() {
    var stream = gulp.src('index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
    return stream;
});

gulp.task('images', ['clean'], function(cb) {
    var stream = gulp.src(['img/*.png','img/*.jpg','img/*.jpeg'])
        .pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('dist/img'));
    return stream;
});

gulp.task('build', ['html-min', 'images', 'cssmin', 'compress']);

gulp.task('default', ['build']);