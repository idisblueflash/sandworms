module.exports = function (grunt) {
  grunt.initConfig({
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

  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['jshint']); 
  grunt.registerTask('js', 'Concatenate and minify static JavaScript assets', ['concat:js', 'uglify:bundle']); 
};
