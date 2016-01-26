/**
 * Created by lucien on 2016-01-25.
 */
'use strict';

var gulp = require('gulp');
var conf = require('./gulp.conf');
var stylish = require('gulp-jscs-stylish');
var $ = require('gulp-load-plugins')();

gulp.task('lint', ['jsLint', 'stylusLint']);

gulp.task('jsLint', function () {
  return gulp
      .src(conf.paths.src + '/**/*.js')
      .pipe($.jshint())
      .pipe($.jscs())
      .pipe(stylish.combineWithHintResults())
      .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('stylusLint', function() {
  return gulp
      .src(conf.paths.src + '/**/*.styl')
      .pipe($.stylint({
        config: '.stylintrc',
        reporter: {
          reporter: 'stylint-stylish',
          reporterOptions: {
            verbose: true
          }
        }
                      }))
      .pipe($.stylint.reporter());
});
