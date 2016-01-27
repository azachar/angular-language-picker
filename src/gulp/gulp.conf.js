/**
 * Created by lucien on 2016-01-25.
 */
'use strict';

/**
 * SETTINGS
 */
exports.appName = require('../../package.json').name;

/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

/**
 * Main paths of our project
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp'
};

/**
 * Implementation for formatting the date in the minified banners
 */
exports.getDate = function() {
  var date = new Date();

  return '/*! ' + require('../../package.json').name + ' ' + date.getDate() + '-' + date.getMonth() + 1 + '-' + date.getFullYear() + ' */\n';
};
