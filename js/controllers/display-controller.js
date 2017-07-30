angular.module('PapaAndBaby')
.controller('displayCtrl', ['$scope', '$routeParams', '$window',  function($scope, $routeParams, $window) {

    var params = Object.keys($routeParams);
    if(params.length == 1){
        try{
            var info = JSON.parse(atob(params[0]));
            if (info.l1.length == 0 || info.l1.length > 50 ||
                info.l2.length == 0 || info.l2.length > 50 ||
                info.d.length == 0)
                {
                throw "Validation error.";
                }
            $scope.lover1 = info.l1;
            $scope.lover2 = info.l2;
            
            var startDate = new Date(info.d);
            if (startDate == "Invalid Date")
                {
                throw "Validation error.";
                }
            var currentDate = new Date();
            var days = Math.ceil ((currentDate-startDate)/86400000);
            if(days < 0 || days > 100000)
                {
                throw "Validation error.";
                }
            $scope.days = days;
        }
        catch (e){
            $window.location.href = '#/setup/';
        }
    }
    else{
        $window.location.href = '#/setup/';
    }

    $scope.OnSettingClick = function (){
        $window.location.href = '#/setup/';
    }
}]);