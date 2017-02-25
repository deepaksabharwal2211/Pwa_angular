var finalApp = angular.module('finalApp', ['ui.router'])
.controller('dataCtrl',['$scope' , 'getData', function(scoping,getData){
scoping.head = "Heading",
getData.fetching(function(response) {
    $scope.dts = response;
    alert(dts);
  });

}])