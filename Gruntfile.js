module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.initConfig({
        ts:{
            check:{
                src:["src/**/*.ts"],
                options:{
                    noEmit: true,
                    sourceMap: false
                }
            }
        },
        //mocha -r ts-node/register 'tests/**/*.ts'
        mochaTest:{
            test:{
            options:{
                require: 'ts-node/register'
            },
                src:['tests/**/*.ts'],
            }
        }
    });

    grunt.registerTask('test', 'run tests', ['mochaTest']);
    grunt.registerTask('check', 'check code' , ['ts']);
};
