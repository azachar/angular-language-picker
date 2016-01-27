/**
 * Created by lucien on 2016-01-25.
 */
'use strict';

var gulp = require('gulp');
var conf = require('./gulp.conf');
var nib = require('nib');
var $ = require('gulp-load-plugins')();

gulp.task('compile', ['jade', 'stylus']);

gulp.task('clean', function() {
  return gulp
      .src(conf.paths.tmp)
      .pipe($.clean());
});

gulp.task('stylus', function() {
  return gulp
      .src(conf.paths.src + '/stylus/*.styl')
      .pipe($.stylus({
                       use: [nib()],
                       'include css': true
                     }))
      .pipe($.concat(conf.appName))
      .pipe($.rename({
        suffix: '.css'
                     }))
      .pipe($.bytediff.start())
      .pipe($.cssmin())
      .pipe($.rename({
        suffix: '.min'
                   }))
      .pipe($.header(conf.getDate()))
      .pipe($.bytediff.stop())
      .pipe(gulp.dest(conf.paths.dist));
});

gulp.task('jade', ['clean'], function() {
  return gulp
      .src(conf.paths.src + '/**/*.jade')
      .pipe($.jade({
                     pretty: true
                   }))
      .pipe(gulp.dest(conf.paths.tmp + '/' + conf.paths.src));
});
