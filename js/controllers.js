var app = angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);

app.controller('projectsCtrl', function ($scope, $http, $window) {
 $http.get("http://codeforamerica.org/api/organizations/Code-for-San-Jose/projects?per_page=999")
 .success(function (response) {$scope.projects = response.objects;});
});

app.controller('homeCtrl', function($scope){

$scope.panel=[
{
	title:"About",
	description:"jkjkjkjl",
	modescription:"sjahhsjakhkj",
	panelclass:"panel--about",
},
{
	title:"Projects",
	description:"ywqtytuyw",
	modescription:"jwjakll",
	panelclass:"panel--projects",

}
];

})
