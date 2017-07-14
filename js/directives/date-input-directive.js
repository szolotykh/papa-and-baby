angular.module('PapaAndBaby')
.directive('dateinputdir', [function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/date-input-directive.html',
        scope: {
            day: '=',
            month: '=',
            year: '=',
            selectedDate: '='
        },
        controller: ['$scope', function($scope){
        }],
        link: function link($scope, element, attrs) {
            // Years
            $scope.years = [];
            var currentDate = new Date ();
            for (var y = currentDate.getFullYear (); y >= 1900; y--){
                $scope.years.push(y);
            }

            // Months
            $scope.Months = [
                { name:"January", getDays: function (year){ return 31; }},
                { name:"February", getDays: function (year){
                    if(year != undefined)
                        return (year%4 == 0) ? 29 : 28; 
                    else
                        return 29;
                    }},
                { name:"March", getDays: function (year){ return 31; }},
                { name:"April", getDays: function (year){ return 30; }},
                { name:"May", getDays: function (year){ return 31; }},
                { name:"June", getDays: function (year){ return 30; }},
                { name:"July", getDays: function (year){ return 31; }},
                { name:"August", getDays: function (year){ return 31; }},
                { name:"September", getDays: function (year){ return 30; }},
                { name:"October", getDays: function (year){ return 31; }},
                { name:"November", getDays: function (year){ return 30; }},
                { name:"December", getDays: function (year){ return 31; }},
            ];

            // Days
            $scope.days = [];
            function _UpdateDays (numOfDays){
                 $scope.days = [];
                for (var i = 1; i <= numOfDays; i++){
                    $scope.days.push(i);
                }
            }
            _UpdateDays (31);

            $scope.OnMonthsChange = function(){
                _UpdateDays ($scope.Months[$scope.month].getDays ($scope.year));
            };

            $scope.OnYearChange = function(){
                if ($scope.month != undefined){
                    _UpdateDays ($scope.Months[$scope.month].getDays ($scope.year));
                }
            };
        }
    };
}]);