/**
 * Created by Lama on 09.12.2015.
 */
var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    notify = require('gulp-notify');

gulp.task('default', function(){
    gulp.src('*/*.css')
        .pipe(concatCss("bundle.css"))//end concat file name
        .pipe(minifyCss())
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest("app/css"))
        .pipe(notify('Done!')); //end folder
});

gulp.task('watch', function(){
   gulp.watch('css/*.css', ['default']);
});