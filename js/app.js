
var app = angular.module('myapp',['ui.router','ngAnimate','ui.bootstrap']);

app.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url:'/',
			templateUrl: 'templates/home.html'
		})
		.state('about', {
			url:'/about',
			templateUrl:'templates/about.html'
		})
		.state('projects', {
			url:'/projects',
			templateUrl:'templates/projects.html'
		})
		.state('data', {
			url:'/data',
			templateUrl:'templates/data.html',
			controller:'test'
		})
		.state('contact', {
			url:'/contact',
			templateUrl:'templates/contact.html'
		})
		.state('register', {
			url:'/register',
			templateUrl:'templates/register.html',
			controller:'register'

		})
		.state('login', {
			url:'/login',
			templateUrl:'templates/login.html',
			controller:'login'

		});
}]);

app.controller('test', ['$scope',function($scope){
	$scope.message="welcome";
}]);

app.controller('login', ['$scope',function($scope){
	$scope.message="Welcome!";
}]);

app.controller('register', ['$scope',function($scope){
	$scope.messag="Welcome!";
}]);

/* Home Page Controller --- Controller for information box on homepage. 
Dynamically generates the next panel's JSON object with arrow click. */

app.controller('homeCtrl', function($scope){

	$scope.panels=[
		{
			title:"About",
			modescription:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
			description:"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum",
			panelclass:"panel--about",
		},
		{
			title:"Projects",
			description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from andom text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 y",
			modescription:"ular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Rich",
			panelclass:"panel--projects",

		}
	];

	$scope.current=0;

	$scope.likesOne=function(){
		$scope.current=($scope.current + 1) % $scope.panels.length;
	};


    /* Hamburger Menu */
   $scope.navClass=function(){
	   $(function() {
			$('#nav-icon').toggleClass('open');
			$('.nav-area').toggleClass('vanish')
		});
	}
	
});
	



/* Projects Page Controller --- Uses angular's native ajax method. */

app.controller('projectsCtrl', function ($scope, $http, $window) {

	$http.get("http://codeforamerica.org/api/organizations/Code-for-San-Jose/projects?per_page=999")
	.success(function (response) {$scope.projects = response.objects;});

});




app.controller('formCtrl',function($scope){

	$scope.fullName = "John";
    $scope.email = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});

App.directive('toolbarTip', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).toolbar(scope.$eval(attrs.toolbarTip));
        }
    };
});
