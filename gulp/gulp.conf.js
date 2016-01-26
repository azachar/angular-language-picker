/**
 * Created by lucien on 2016-01-25.
 */
'use strict';

/**
 * SETTINGS
 */
exports.appName = require('../package.json').name;

/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');

/**
 * Main paths of our project
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp'
};

exports.getDate = function() {
  var date = new Date();

  return '/*! ' + require('../package.json').name + ' ' + date.getDate() + '-' + date.getMonth() + 1 + '-' + date.getFullYear() + ' */\n';
}();

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  directory: 'bower_components',
  devDependencies: true
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};