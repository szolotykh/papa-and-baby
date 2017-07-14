angular.module('PapaAndBaby')
.controller('setupCtrl', ['$scope', '$window',  function($scope, $window) {
    //if ($scope.day && $scope.month && $scope.year){
    //    $scope.selectedDate = new Date ($scope.year, $scope.month, $scope.day);
    //}
    function GenerateConfigString (lover1, lover2, date){
        var ob = new Object ();
        ob.l1 = lover1;
        ob.l2 = lover2;
        ob.d = date;
        return btoa (JSON.stringify(ob));
    }

    function OnContinue (){
        var selectedDate = new Date ($scope.year, $scope.month, $scope.day);
        if (selectedDate){
            var configStr = GenerateConfigString ($scope.iLover1, $scope.iLover2, selectedDate);
            $window.location.href = '#/?' + configStr;
        }
    }

    $('#bContinue').click (OnContinue);
}])