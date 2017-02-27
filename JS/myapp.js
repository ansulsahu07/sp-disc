/* My App Module */
var app = angular.module("myApp", ['ngRoute', 'mainCtrl']);

/*---Angular UI Router---*/
app.config(function ($routeProvider) {
    $routeProvider
    // route for the speciality page
        .when('/sp:itemId', {
        templateUrl: 'pages/speciality.htm'
        , controller: 'pdfCtrl'
    }).otherwise({
        templateUrl: 'pages/search-box.htm'
    });
});
