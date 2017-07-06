angular.module('PapaAndBaby')
.controller('setupCtrl', ['$scope', '$window',  function($scope, $window) {
    function GenerateConfigString (lover1, lover2, date){
        var ob = new Object ();
        ob.l1 = lover1;
        ob.l2 = lover2;
        ob.d = date;
        return btoa (JSON.stringify(ob));
    }

    function OnContinue (){
        var configStr = GenerateConfigString ($scope.iLover1, $scope.iLover2, $scope.iStartDate);
        $window.location.href = '#/?' + configStr;
    }

    $('#bContinue').click (OnContinue);
    
}])