/**
 * Defines <ng-kit-form-error-alert> directive
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.form-error-alert').directive('ngKitFormErrorAlert', function() {
        return {
            restrict: 'E',
            templateUrl: 'form-error-alert.directive.html',
            scope: {
                error: '<error'
            },
            controller: function($scope) {

                /**
                 * Checks if it's system error
                 */
                $scope.isSystemError = function() {
                    return (
                        $scope.error && 
                        typeof $scope.error === 'object' &&
                        $scope.error.hasOwnProperty('traceback')
                    );
                };

                /**
                 * Checks if error is string
                 */
                $scope.isString = function() {
                    return typeof $scope.error === 'string';
                };
            },
        };
    });
})(angular);