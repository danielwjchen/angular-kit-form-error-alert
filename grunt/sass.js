'use strict';
module.exports = function(grunt) {
	grunt.config.set('sass', {
        compile: {
            files: {
                'dist/ng-kit.form-error-alert.css': 'src/form-error-alert.directive.scss',
            },
        },
        minify: {
            options: {
                style: 'compressed',
            },
            files: {
                'dist/ng-kit.form-error-alert.min.css': 'src/form-error-alert.directive.scss',
            },
        },
	});
    grunt.loadNpmTasks('grunt-contrib-sass');
};