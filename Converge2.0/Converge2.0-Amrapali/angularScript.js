var app = angular.module('studentApp',[]);

app.controller('studentCtrl',function($scope){

$scope.doSomething = function(){
	alert('angular UI' + $scope.name);

//alert('Clicked AddStudent');

	var length = 0;
var objects = [];
if(localStorage.getItem("students")){
objects = JSON.Parse(localStorage.getItem("students"));
length = objects.length;

}

var object ={
	sname: $scope.name,
	semail: $scope.email,
	scollege: $scope.college
  };
objects[length] = object;
localStorage.setItem("students", JSON.stringify(objects));

}


});