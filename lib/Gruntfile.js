module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js:{
      src: ['../js/quiz.js'],
      dest: `../dist/app.js`
      },
      options: {
        transform: ["hbsfy"],
        browserifyOptions: {
          paths: [
          "./node_modules"]
        }
      }
    },
    // copy: {
    //   jquery: {
    //     expand: true,
    //     cwd: 'node_modules/jquery/dist',
    //     src: ['jquery.min.js'],
    //     dest: '../dist'
    //   },
    
    //   bootstrap: {
    //     expand: true,
    //     cwd: 'node_modules/bootstrap/dist',
    //     src: ['**'],
    //     dest: '../dist'
    //   }
    // },
    jshint: {
      options: {
        predef: [ "document", "console", "$" ],
        esnext: true,
        globalstrict: true,
        globals: {"CarLot": true},
        browserify: true
      },
      files: ['../js/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/quiz.css': '../sass/styles.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        files: ['../template/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
