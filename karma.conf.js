// Karma configuration
// Generated on Sat Nov 14 2015 08:16:16 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'chai-as-promised', 'chai-dom', 'sinon-chai'],


    client: {
      mocha: {
        timeout: 5000
      }
    },

    // list of files / patterns to load in the browser
    files: [
            "/bower_components/angular/angular.js",
            "/bower_components/font-awesome/less/font-awesome.less",
            "/bower_components/font-awesome/scss/font-awesome.scss",
            "/bower_components/flag-icon-css/css/flag-icon.min.css",
            "/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
            "/dist/angular-language-picker.js",
            "/dist/angular-language-picker.templates.js",
            "/test/1.spec.js"
          ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'dist/**/*.js': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],


    // web server port
    port: process.env.PORT || 9876, // replace with your port


    hostname: process.env.IP || 'localhost',


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
