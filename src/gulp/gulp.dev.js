/**
 * Created by lucien on 2016-01-25.
 */
'use strict';

var gulp = require('gulp');
var conf = require('./gulp.conf');
var $ = require('gulp-load-plugins')();


gulp.task('dev', ['connect', 'watch']);

gulp.task('watch', function() {
  $.watch(conf.paths.src + '/**/*.styl', function() {
    gulp.start('stylusLint');
  });

  $.watch(conf.paths.src + '/**/*.js', function() {
    gulp.start('jsLint');
  });
});

gulp.task('connect', function() {
  $.connect.server({
    root: './',
    port: 1987,
    livereload: true
                   });
});

