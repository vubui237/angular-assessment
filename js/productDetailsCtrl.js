angular.module('myApp').controller('prodCtrl', function($scope, $stateParams, service) {
     $scope.getData = service.getData().then(function(response) {
        $scope.something = response.data;
        $scope.detailed;
        $scope.something.map((x)=> { $stateParams.id == x.id ? $scope.detailed= x : 0})
    })

})