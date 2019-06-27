'use strict'
angular.module('CloudSight', ['ngMaterial'])
    .directive('addOperator', [function(){
        return{
            templateUrl: 'directives/add-operator.html'
        };
    }])
    ;