/**
 * Created by lucien on 2016-01-27.
 */
'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

wrench.readdirSyncRecursive('./src/gulp').filter(function(file) {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)
});

gulp.task('default', ['dev']);