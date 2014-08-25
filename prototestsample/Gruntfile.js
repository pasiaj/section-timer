module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      app: {
        files: {
          'leiska/css/app.css': 'leiska/scss/app.scss',
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 10 versions']
      },
      app: {
        files: {
          'leiska/css/app.css': 'leiska/css/app.css'
        }
      },
    },
    devserver: {
      app: {
        options: {
          base: 'leiska',
          port: 2000,
          async: true
        }
      }
    },
    watch: {
      html: {
        files: [
          'leiska/*.html',
        ],
        options: {
          livereload: true,
          interrupt: false,
        }
      },
      style: {
        files: [
          'leiska/scss/*.scss',
        ],
        tasks: ['sass:app', 'autoprefixer:app'],
        options: {
          livereload: false,
          interrupt: true,
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-devserver');

  grunt.registerTask('serve', ['devserver']);
  grunt.registerTask('default', ['watch']);

};
