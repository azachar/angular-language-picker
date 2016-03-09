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
    del         = require('del'),
    mainBowerFiles = require('main-bower-files'),
    series = require('stream-series'),
    path = require('path');

var banner = [
    '/**',
    ' * @name <%= pkg.name %>',
    ' * @version v<%= pkg.version %>',
    ' * @author Build by <%= pkg.author.name %> <%= pkg.author.email %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
].join('\n');

// Handle all of the configuration
const gulpConfig = {
  dest: 'dist',
  css: {
    src: path.join('src', 'styl', '*.styl'),
    concatName: 'angular-language-picker.css' // our main css file
  },
  js: {
    concatName: 'angular-language-picker.js', // our main js file
    template: '', // azachar langMap list
    src: path.join('src', 'js', 'angular-language-picker.js'),
    dest: '.tmp',
    tmp: path.join('dist', 'angular-language-picker.js')
  },
  jade: {
    templateName: 'templates-languagePicker',
    concatName: 'angular-language-picker.templates.js',
    src: path.join('src', 'templates', '*.tpl.jade')
  },
  example: 'example'
}


/**
 * Compiles stylus files in src/styl folder into one css file.
 */
gulp.task('styles', function () {
 return gulp.src(gulpConfig.css.src)
  .pipe($.stylus()) // compiles stylus
  .pipe($.autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe($.minifyCss({compatibility: 'ie8'}))
  .pipe($.concat(gulpConfig.css.concatName))
  .pipe($.header(banner, {pkg: pkg}))     // append a header
  .pipe(gulp.dest(gulpConfig.dest))
  .pipe($.copy(gulpConfig.example));
});

/**
 * Concat source files in src folder into one plugin file.
 */
gulp.task('concat:source', ['template:source'], function(){
    return gulp.src(
        [
            gulpConfig.js.src,
        ])
        .pipe($.insert.append('\n\n'))                  // insert spaces between source files
        .pipe($.wrap('(function(window, angular)'
                        +'{\n\n<%=contents%>}'          // wrap myPlugin.js for supporting
                    +')(window, window.angular);'))      // both amd and global
        .pipe($.addSrc.prepend(gulpConfig.js.template)) // langMap
        .pipe($.concat(gulpConfig.js.concatName))              // concat into one file
        .pipe($.ngAnnotate({add:true, remove:true}))    // for strict dependecy injection
        .pipe(gulp.dest(gulpConfig.js.dest));
});



/**
 * Append header to plugin file.
 */
gulp.task('header:source', ['concat:source'], function() {
    return gulp.src(gulpConfig.js.tmp)
        .pipe($.header(banner, {pkg: pkg}))     // append a header
        .pipe(gulp.dest(gulpConfig.dest))
        .pipe($.copy(gulpConfig.example));       // copy for displaying examples
});



/**
 * Uglify the plugin file and also append header to it.
 */
gulp.task('uglify:source', ['concat:source'], function() {
    return gulp.src(gulpConfig.js.tmp)
        .pipe($.uglify())
        .pipe($.header(banner, {pkg: pkg}))
        .pipe($.rename({suffix: '.min'}))
        .pipe(gulp.dest(gulpConfig.dest));
});


/**
 * Compile Jade files and minify htmls in src/template directory and generate angular-language-picker.templates.js which contains the htmls
 */
gulp.task('template:source', function(){
    return gulp.src(gulpConfig.jade.src)
        .pipe($.jade())
        .pipe($.htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
        }))
        .pipe($.template(gulpConfig.jade.concatName, {
            module: gulpConfig.jade.templateName     // your module name
        }))
        .pipe($.wrap('(function(angular)'
                        +'{\n\n<%=contents%>}'          // wrap myPlugin.js for supporting
                    +')(window.angular);'))      // both amd and global
        .pipe($.uglify())
        .pipe($.header(banner, {pkg: pkg}))     // append a header
        .pipe(gulp.dest(gulpConfig.dest))
        .pipe($.copy(gulpConfig.example));
});



/**
 * Delete temporary build folder
 */
gulp.task('clean:build', function(){
    return del([gulpConfig.js.dest, gulpConfig.dest, path.join(gulpConfig.example, gulpConfig.dest)]);
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
    gulp.watch([gulpConfig.js.src], ['build', 'build:ngdocs']);
    gulp.watch(['docs/index.html']).on('change', browserSync.reload);
});



/**
 * Generate docs templates with plugin source file
 */
gulp.task('build:ngdocs', ['build'], function(){
    var bowerDependencies = gulp.src(mainBowerFiles(), {read: false});

    return gulp.src([path.join(gulpConfig.dest, '**', '*.js'),'!./dist/**/*.min.js'])
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
    gulp.watch(['gulpConfig.js.src'], ['build']).on('change', browserSync.reload);
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
    return gulp.src(gulpConfig.js.src)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});


gulp.task('lint:source:nofail', function(){
    return gulp.src(gulpConfig.js.src)
    .pipe($.eslint())
    .pipe($.eslint.format());
});



gulp.task('watch:source', ['lint:source:nofail'], function(){
    gulp.watch([gulpConfig.js.src], ['lint:source:nofail']);
});



gulp.task('build', ['styles','template:source', 'concat:source', 'header:source', 'uglify:source']);

gulp.task('test', ['build', 'lint:source', 'test:spec']);

gulp.task('clean', ['clean:build']);

gulp.task('example', ['build', 'example:inject']);

gulp.task('ngdocs', ['build:ngdocs']);

gulp.task('default', ['build', 'test', 'example', 'ngdocs']);
