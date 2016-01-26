/**
 * Created by lucien on 2016-01-25.
 */
'use strict';

var gulp = require('gulp');
var conf = require('./gulp.conf');
var ngHtml2Js = require('gulp-ng-html2js');
var $ = require('gulp-load-plugins')();

gulp.task('build', ['compile', 'uglify']);

gulp.task('html2js', function() {
  return gulp
      .src(conf.paths.tmp + '/' + conf.paths.src + '/templates/*.tpl.html')
      .pipe($.bytediff.start())
      .pipe($.htmlmin({
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                      }))
      .pipe($.bytediff.stop())
      .pipe(ngHtml2Js({
        moduleName: 'templates-languagePicker',
        template: '$templateCache.put(\'<%= template.url %>\',\n \'<%= template.prettyEscapedContent %>\');'
                      }))
      .pipe($.concat(conf.appName))
      .pipe($.rename({
        suffix: '.js'
                     }))
      .pipe($.tap(function(file) {
        file.contents = Buffer.concat([
                                        new Buffer('(function(module) {\n' +
                                                   'try {\n' +
                                                   '  module = angular.module(' + '\'templates-languagePicker\'' + ');\n' +
                                                   '} catch (e) {\n' +
                                                   '  module = angular.module(' + '\'templates-languagePicker\'' + ', []);\n' +
                                                   '}\n' +
                                                   'module.run([\'$templateCache\',' +
                                                   ' function($templateCache)' +
                                                   ' {\n\'use strict\';\n'),
                                        file.contents,
                                        new Buffer('\n}]);\n' +
                                                   '})();\n')
                                      ]);
      }))
      .pipe($.rename({
        suffix: '.template'
                     }))
      .pipe(gulp.dest(conf.paths.dist))
      .pipe($.htmlmin({
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                      }))
      .pipe($.header(conf.getDate()))
      .pipe($.rename({
                       suffix: '.min'
                     }))
      .pipe(gulp.dest(conf.paths.dist));

});

gulp.task('uglify', ['html2js'], function() {
  return gulp
      .src(['bower_components/langmap/language-mapping-list.js',
            conf.paths.src + '/**/*.js'])
      .pipe($.concat(conf.appName))
      .pipe($.rename({
        suffix: '.js'
                     }))
      .pipe(gulp.dest(conf.paths.dist))
      .pipe($.bytediff.start())
      .pipe($.uglify())
      .pipe($.header(conf.getDate()))
      .pipe($.rename({
        suffix: '.min'
                     }))
      .pipe($.bytediff.stop())
      .pipe(gulp.dest(conf.paths.dist));
});

