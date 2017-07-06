angular.module('PapaAndBaby')
.controller('displayCtrl', ['$scope', '$routeParams', '$window',  function($scope, $routeParams, $window) {
    var params = Object.keys($routeParams);
    if(params.length == 1){
        try{
            var info = JSON.parse(atob(params[0]));
        }
        catch (e){
            $window.location.href = '#/setup/';
        }
        console.log (info);
        $scope.lover1 = info.l1;
        $scope.lover2 = info.l2;

        var start = new Date(info.d);
        var current = new Date();
        var days = Math.round((current-start)/86400000);
        $scope.days = days + " Days";
    }
    else{
        $window.location.href = '#/setup/';
    }
}]);