module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      '../dist/app.js' : ['../js/**/*.js']
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['browserify']);
};
