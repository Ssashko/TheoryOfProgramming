angular.module('appRoutes', []).config(['$routeProvider',
 '$locationProvider', function($routeProvider,
$locationProvider) {
 $routeProvider

 .when('/', {
 templateUrl: 'views/home.html',
 controller: 'HomeController'
 })

 .when('/students', {
 templateUrl: 'views/student.html',
 controller: 'StudentController'
 })
 .when('/groups', {
    templateUrl: 'views/group.html',
    controller: 'GroupController'
 });
 $locationProvider.html5Mode(true);
}]);