'use strict';
(function(angular) {
    angular.module('ng-kit.form-error-alert.example', [
        'ng-kit.form-error-alert',
    ])
    .controller('IndexController', function($scope) {
        $scope.staticError = "Oops! Something went wrong";
    });
})(angular);