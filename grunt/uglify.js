'use strict';
module.exports = function(grunt, configs) {
	grunt.config.set('uglify', {
        options : {
            mangle: false, // changes function and variable names
            compress: true,
            preserveComments: false,
            sourceMap: true,
        },
        my_target: {
            files : {
                'dist/ng-kit.form-error-alert.min.js': [
                    'dist/ng-kit.form-error-alert.templates.js',
                    'src/form-error-alert.js',
                    'src/form-error-alert.directive.js',
                ],
            }
        },
	});
    grunt.loadNpmTasks('grunt-contrib-uglify');
};