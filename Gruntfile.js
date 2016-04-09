// the credentials we use to connect to our MySQL server
var options = require('./db.json');

module.exports = function (grunt) {
  grunt.initConfig({
    db_create: { options: options },
    db_upgrade: { options: options },
    db_rollback: { options: options },
    db_seed: { options: options },
    jshint: {
      client: [
        'Gruntfile.js',
        'public/js/**/*.js',
        '!public/js/vendor'
        ]
    },
    clean: {
      js: 'build/js',
      css: 'build/css',
      less: 'public/**/*.css'
    },
    sprite: {
      icons: {
        src: 'public/img/icons/*.png',
        dest: 'build/img/iconss.png',
        destCss: 'build/css/icons.css'
      }
    },
    uglify: {
      bundle: {
        files: {
          'build/js/bundle.min.js': 'build/js/bundle.js'
        }
      }
    },
    less: {
      compile: {
        files: {
          'build/css/compiled.css': 'public/css/layout.less'
        }
      }
    },
    concat: {
      js: {
        files: {
          'build/js/bundle.js': 'public/js/**/*.js'
        }
      } 
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');

    // load all the tasks in the `tasks/` directory
  grunt.loadTasks('./tasks');

  // register a first time setup alias
  grunt.registerTask('db_setup', 'Create, update, and seed a new database', ['db_create', 'db_upgrade', 'db_seed']);

  grunt.registerTask('default', ['jshint']); 
  grunt.registerTask('js', 'Concatenate and minify static JavaScript assets', ['concat:js', 'uglify:bundle']); 
};

