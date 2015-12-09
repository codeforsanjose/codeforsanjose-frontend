var app = angular.module('myapp',['ui.router']);

app.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url:'/',
			templateUrl: 'templates/home.html'
		})
		.state('about', {
			url:'/',
			templateUrl: 'templates/about.html'
		})
		.state('projects', {
			url:'/',
			templateUrl:'templates/projects.html'
		});
}]);

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
