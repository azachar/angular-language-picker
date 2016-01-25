module.exports = function (grunt) {

  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['.tmp'],

    // Compiles Jade to html
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: [{
          expand: true,
          src: [
            'src/templates/*.jade'
          ],
          dest: '.tmp',
          ext: '.tpl.html'
        }]
      }
    },

    // JS linter
    jshint: {
      options: {
        jshintrc: './.jshintrc',
        reporter: require('jshint-stylish')
      },
      files: [
        './src/**/*.js'
      ]
    },

    // JS coding style linter
    jscs: {
      options: {
        config: "./.jscsrc"
      },
      files: {
        src: [
          './src/**/*.js'
        ]
      }
    },

    html2js: {
      options: {
        base: '.tmp/src/templates',
        useStrict: true,
        quoteChar: '\'',
        htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
      },
      module: 'templates-languagePicker',
      languagePicker: {
        src: ['.tmp/**/*.tpl.html'],
        dest: 'dist/<%= pkg.name %>.templates.js'
      },
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['bower_components/langmap/language-mapping-list.js','src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'],
          'dist/<%= pkg.name %>.templates.min.js': ['<%= html2js.languagePicker.dest %>']
        }
      }
    },

    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      combine: {
        files: {
          'dist/<%= pkg.name %>.min.css': ['src/**/*.css']
        }
      }
    },

    watch: {
      src: {
        files: ['src/**/*'],
        tasks: ['jshint', 'jscs', 'build'],
        options: {
          spawn: false
        }
      }
    },

    connect: {
      server: {
        options: {
          base: './',
          port: 1987
        }
      }
    }

  });

  grunt.registerTask('build', [
    'clean',
    'jade',
    'html2js',
    'concat',
    'uglify',
    'cssmin'
  ]);

  grunt.registerTask('dev', [
    'build',
    'connect',
    'watch'
  ]);

};
