var myApp=angular.module('StudentController', []);
myApp.controller('StudentController', function($scope, $http) {
 $scope.message = 'Welcome to Student section!';

 let apiUrl = "http://localhost:3000/api";

 $http.get(apiUrl + "/students").then(function(response){
    $scope.students = response.data;
 });
 var refresh = function(){
    $http.get(apiUrl+"/students").then(function(response){
        $scope.students = response.data;
        $scope.student ={};
    });
 };
 refresh()
 $scope.addStudent = function (){
 $http.post(apiUrl + "/students/add", $scope.student)
 .then(function(response){
    console.log(response);
    refresh();
 });
 };
 SGLOBAL = $scope;
 $scope.delete = function(id){
   
 $http.delete(apiUrl+"/students/" + id)
 .then(function(response){
    console.log(response);
    refresh();
 });
 };
});
