module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        eslint: {
            target: []
        }
    });
    
    grunt.registerTask('check', 'check code' , ['eslint']);
};