const
    gulp_rename = {
        'gulp-util' : 'gutil',
        'gulp-angular-templatecache': 'template'
    },
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')({rename: gulp_rename}),
    browserSync = require('browser-sync').create(),
    karma       = require('karma').Server,
    pkg         = require('./package.json'),
    del         = require('del');
    mainBowerFiles = require('main-bower-files');
    series = require('stream-series');

var banner = [
    '/**',
    ' * @name <%= pkg.name %>',
    ' * @version v<%= pkg.version %>',
    ' * @author Build by <%= pkg.author.name %> <%= pkg.author.email %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
].join('\n');


gulp.task('styles', function () {
 return gulp.src('./src/**/*.scss')
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe($.minifyCss({compatibility: 'ie8'}))
  .pipe($.concat('angular-language-picker.css'))
  .pipe($.header(banner, {pkg: pkg}))     // append a header
  .pipe(gulp.dest('./dist'))
  .pipe($.copy('example'));
});

/**
 * Concat source files in src folder into one plugin file.
 */
gulp.task('concat:source', ['template:source'], function(){
    return gulp.src(
        [
            './src/**/*.js',
        ])
        .pipe($.insert.append('\n\n'))                  // insert spaces between source files
        .pipe($.concat('angular-language-picker.js'))              // concat into one file
        .pipe($.ngAnnotate({add:true, remove:true}))    // for strict dependecy injection
        .pipe($.wrap('(function(window, angular)'
                        +'{\n\n<%=contents%>}'          // wrap myPlugin.js for supporting
                    +')(window, window.angular);'))      // both amd and global
        .pipe(gulp.dest('.tmp'));
});



/**
 * Append header to plugin file.
 */
gulp.task('header:source', ['concat:source'], function() {
    return gulp.src('.tmp/angular-language-picker.js')
        .pipe($.header(banner, {pkg: pkg}))     // append a header
        .pipe(gulp.dest('./dist'))
        .pipe($.copy('example'));       // copy for displaying examples
});



/**
 * Uglify the plugin file and also append header to it.
 */
gulp.task('uglify:source', ['concat:source'], function() {
    return gulp.src('.tmp/angular-language-picker.js')
        .pipe($.uglify())
        .pipe($.header(banner, {pkg: pkg}))
        .pipe($.rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});


/**
 * Compile Jade files and minify htmls in src/template directory and generate angular-language-picker.templates.js which contains the htmls
 */
gulp.task('template:source', function(){
    return gulp.src('./src/templates/*.tpl.jade')
        .pipe($.jade())
        .pipe($.htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
        }))
        .pipe($.template('angular-language-picker.templates.js', {
            module: 'templates-languagePicker'     // your module name
        }))
        .pipe($.wrap('(function(angular)'
                        +'{\n\n<%=contents%>}'          // wrap myPlugin.js for supporting
                    +')(window.angular);'))      // both amd and global
        .pipe($.uglify())
        .pipe($.header(banner, {pkg: pkg}))     // append a header
        .pipe(gulp.dest('./dist'))
        .pipe($.copy('example'));
});



/**
 * Delete temporary build folder
 */
gulp.task('clean:build', function(){
    return del(['.tmp/','./dist/','./example/dist']);
});



/**
 * Init a browser-sync with proxy and port.
 */
gulp.task('init:browserSync', function(){
    browserSync.init({
        proxy: 'localhost:8000',
        port: process.env.PORT      //replace this with a port which you want to use
    });
});



/**
 * webserver for examples
 */
gulp.task('webserver:example', ['init:browserSync', 'watch:example'], function(){
    return gulp.src('example')
        .pipe($.webserver({
            host: 'localhost',
            path: '/example',
            port: '8000'
        }))
        .on('error', $.gutil.log);
});



/**
 * webserver for ngdocs
 */
gulp.task('webserver:ngdocs', ['build:ngdocs', 'init:browserSync', 'watch:ngdocs'], function(){
    return gulp.src('docs')
        .pipe($.webserver({
            host: 'localhost',
            path: '/docs',
            port: '8000'
        }))
        .on('error', $.gutil.log);
});



/**
 * Watch source files and reload docs page when detects change
 */
gulp.task('watch:ngdocs', ['init:browserSync'], function(){
    gulp.watch(['src/**/*.js'], ['build', 'build:ngdocs']);
    gulp.watch(['docs/index.html']).on('change', browserSync.reload);
});



/**
 * Generate docs templates with plugin source file
 */
gulp.task('build:ngdocs', ['build'], function(){
    var bowerDependencies = gulp.src(mainBowerFiles(), {read: false});

    return gulp.src(['./dist/**/*.js','!./dist/**/*.min.js'])
    .pipe($.ngdocs.process({
        html5Mode : false,
        scripts: [
            './bower_components/angular/angular.min.js',
            './bower_components/angular-animate/angular-animate.min.js',
            './bower_components/marked/lib/marked.js',
            './dist/*.js',
            '!./dist/*.min.js'
        ]
    }))
    .pipe(gulp.dest('./docs'));
});



gulp.task('watch:example', ['init:browserSync'], function() {
    gulp.watch(['src/**/*.js'], ['build']).on('change', browserSync.reload);
    gulp.watch(['example/**/*.html']).on('change', browserSync.reload);
});

function transform(filepath, file, i, length) {
  return '\n\t\t\t\'' + filepath + '\'' + (i + 1 < length ? ',' : '\n\t\t');
}

gulp.task('example:inject',['header:source'], function() {
  var bowerDependencies = gulp.src(mainBowerFiles(), {read: false});
  var dist = gulp.src(['./dist/**/*.js', './dist/**/*.css', '!./dist/**/*.min.js', '!./dist/**/*.min.css'], {read: false})
  // .pipe($.angularFilesort())
  ;

  return gulp.src('./example/index.html')
  .pipe($.inject(bowerDependencies, {
    name: 'bower'
  }))
  .pipe($.inject(dist, {
    name:'dist'
  }))
  .pipe(gulp.dest('./example'));
});

gulp.task('karma:inject',['header:source'], function() {
  var bowerDependencies = gulp.src(mainBowerFiles(), {read: false});
  var dist = gulp.src(['./dist/**/*.js','!./dist/**/*.min.js'], {read: false})
  // .pipe($.angularFilesort())
  ;
  var spec = gulp.src(['./test/**/*.spec.js'], {read: false})

  return gulp.src('./karma.conf.js')
  .pipe($.inject(series(bowerDependencies, dist, spec),
    {
      starttag: 'files: [',
      endtag: ']',
      transform: function (filepath, file, i, length) {
        return '  "' + filepath + '"' + (i + 1 < length ? ',' : '');
      }
    }))
  .pipe(gulp.dest('./'));
});

gulp.task('test:spec', ['build', 'lint:source', 'karma:inject'], function (done) {
    new karma({
        configFile: __dirname + '/karma.conf.js',
        browsers: ['PhantomJS'],
        singleRun: true
        }, function(){
            done();
        }
    ).start();
});


gulp.task('lint:source', function (){
    return gulp.src('./src/**/*.js')
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});


gulp.task('lint:source:nofail', function(){
    return gulp.src('./src/**/*.js')
    .pipe($.eslint())
    .pipe($.eslint.format());
});



gulp.task('watch:source', ['lint:source:nofail'], function(){
    gulp.watch(['src/**/*.js'], ['lint:source:nofail']);
});



gulp.task('build', ['styles','template:source', 'concat:source', 'header:source', 'uglify:source']);

gulp.task('test', ['build', 'lint:source', 'test:spec']);

gulp.task('clean', ['clean:build']);

gulp.task('example', ['build', 'example:inject']);

gulp.task('ngdocs', ['build:ngdocs']);

gulp.task('default', ['build', 'test', 'example', 'ngdocs']);
