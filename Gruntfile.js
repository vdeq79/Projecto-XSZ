module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-shell');
    grunt.initConfig({
        shell:{
            check:{
                command: 'deno check --reload ./src/*.ts'
            }
        }
    });

    grunt.registerTask('check', 'check code' , ['shell']);
};
