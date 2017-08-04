angular.module('myApp').service('service', function($http) {
    this.getData = function() {
        return $http({
         method: 'GET',
         url: 'https://practiceapi.devmountain.com/products'
        }).then(function successCallback(response) {
            return response;

        }, function errorCallback(response) {
            return "Could not retrive data"
        });
    }

})