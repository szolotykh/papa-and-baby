angular.module('PapaAndBaby')
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/display.html",
        controller : 'displayCtrl'
    })
    .when("/setup", {
        templateUrl : "templates/setup.html",
        controller : 'setupCtrl'
    })
    .otherwise("/");
}]);
