angular.module('myApp').controller('shopCtrl', function($scope, service) {
    $scope.getData = service.getData().then(function(response) {
        $scope.something = response.data;
    })

})

