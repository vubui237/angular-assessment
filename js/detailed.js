angular.module('myApp').directive('productDetails', function() {
  return {
    templateUrl: './views/product-tmpl.html',
    restrict: 'E',
  }
})