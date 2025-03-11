function AddStudent(){
	alert('Clicked AddStudent');

	var name = document.getElementById("name").value;
var email= document.getElementById("email").value;
var college= document.getElementById("College").value;
var length = 0;
var objects = [];
if(localStorage.getItem("students")){
objects = JSON.Parse(localStorage.getItem("students"));
length = objects.length;

}

var object ={
	sname: name,
	semail: email,
	scollege: college
  };
objects[length] = object;
localStorage.setItem("students", JSON.stringify(objects));
}