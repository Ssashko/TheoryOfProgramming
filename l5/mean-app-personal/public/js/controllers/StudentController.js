var myApp=angular.module('StudentController', []);
myApp.controller('StudentController', function($scope, $http) {
 $scope.message = 'Welcome to Student section!';

 $scope.regexName = new RegExp(/^[A-Za-z ]{3,}$/);
 $scope.regexDate = new RegExp(/^(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))|((0[1-9]|[12]\d|3[01]).(0[1-9]|1[0-2]).[12]\d{3})|((0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/[12]\d{3}))$/);
 $scope.regexGroup = new RegExp(/^[0-9]{1,3}[A-Z]{0,1}$/);

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
   if($scope.studentAddingForm.$invalid)
      return;
   $scope.studentAddingForm.$setPristine();
 $http.post(apiUrl + "/students/add", $scope.student)
 .then(function(response){
    console.log(response);
    refresh();
   });
 };
 $scope.delete = function(id){
   
 $http.delete(apiUrl+"/students/" + id)
 .then(function(response){
    console.log(response);
    refresh();
 });
 };

 $scope.modelShow = false;

 $scope.showModel = function(id,_name,_surname,_birthday,_group){
   $scope.new_id = id;
   $scope.new = {
      name: _name,
      surname: _surname,
      birthday: (new Date(_birthday)).toLocaleDateString("en-GB"),
      group: _group
   };
   $scope.modelShow = true;
 };

 $scope.update = function() {
   if($scope.studentUpdateForm.$invalid)
      return;
   $http.put(apiUrl+"/students/" + $scope.new_id, $scope.new)
   .then(function(response){
      console.log(response);
      refresh();
      $scope.modelShow = false;
   });
 };
 $scope.closeWin = function() {
   $scope.modelShow = false;
 };

});
