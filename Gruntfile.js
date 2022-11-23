module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-ts');
    grunt.initConfig({
        ts:{
            check:{
                src:["src/*.ts"],
                options:{
                    noEmit: true,
                    sourceMap: false
                }
            }
        }
    });

    grunt.registerTask('check', 'check code' , ['ts']);
};
