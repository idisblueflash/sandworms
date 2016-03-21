module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      bundle: {
        files: {
          'build/js/bundle.min.js': 'build/js/bundle.js'
        }
      }
    },
    jshint: ['Gruntfile.js'],
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['jshint']); 
};
