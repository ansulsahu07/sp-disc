var mainCtrl = angular.module("mainCtrl", []);

/* My Controller */
mainCtrl.controller('myCtrl', function ($scope, $http) {
    $http.get('JSON/records.json').then(function (res) {
        $scope.fullRecords = res.data;
    });
});
/* My Custom Directives */
mainCtrl.directive("footer", function () {
    return {
        restrict: "E"
        , template: "<div class='container'><h6>Copyright © My First AngularJs Template. All Rights Reserved.</h6></div>"
    };
});
mainCtrl.directive("customSearchInput", function () {
    return {
        restrict: "E"
        , templateUrl: "pages/custom-search-input.htm"
    };
});
/* My PDF Controller */
mainCtrl.controller("pdfCtrl", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{    
			$http.get('JSON/records.json').success (function(data){
				$scope.fullRecords = data;
				$scope.whichItem = $routeParams.itemId;
			}); 
		}]
);