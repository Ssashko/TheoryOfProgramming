var myApp=angular.module('GroupController', []);
myApp.controller('GroupController', function($scope, $http) {
 $scope.message = 'Welcome to Group section!';
 $scope.regexGroup = new RegExp(/^[0-9]{1,3}[A-Z]{0,1}$/);
 $scope.regexSpec = new RegExp(/^[A-Za-z_ -]{4,50}[0-9]{0,3}$/);
 

 let apiUrl = "http://localhost:3000/api";

 $http.get(apiUrl + "/groups").then(function(response){
    $scope.groups = response.data;
 });
 var refresh = function(){
    $http.get(apiUrl+"/groups").then(function(response){
        $scope.groups = response.data;
        $scope.group ={};
    });
 };
 refresh()
 $scope.addGroup = function (){
   
   if($scope.groupAddingForm.$invalid)
   {
      return;
   }
   $scope.groupAddingForm.$setPristine();
   
 $http.post(apiUrl + "/groups/add", $scope.group)
 .then(function(response){
    console.log(response);
    refresh();
 });
 };
 $scope.delete = function(id){
   
 $http.delete(apiUrl+"/groups/" + id)
 .then(function(response){
    console.log(response);
    refresh();
 });
 };

 $scope.modelShow = false;

 $scope.showModel = function(id,_group,_specialization){
   $scope.new_id = id;
   $scope.new = {
      group: _group,
      specialization: _specialization,
   };
   $scope.modelShow = true;
 };

 $scope.update = function() {
   
   if($scope.groupUpdateForm.$invalid)
   {
      return;
   }
   $scope.groupUpdateForm.$setPristine();
   $http.put(apiUrl+"/groups/" + $scope.new_id, $scope.new)
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
