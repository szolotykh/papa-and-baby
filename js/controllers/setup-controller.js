angular.module('PapaAndBaby')
.controller('setupCtrl', ['$scope', '$window',  function($scope, $window) {
    function _GenerateConfigString (lover1, lover2, date){
        var ob = new Object ();
        ob.l1 = lover1;
        ob.l2 = lover2;
        ob.d = date;
        return btoa (JSON.stringify(ob));
    }

    function OnContinue (){
        if ($scope.date){
            var configStr = _GenerateConfigString ($scope.iLover1, $scope.iLover2, $scope.date);
            $window.location.href = '#/?' + configStr;
        }
    }

    $('#bContinue').click (OnContinue);
}])