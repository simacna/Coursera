// johnGreeting.sayHello();
// //sinaGreeting.sayHi();
// sayHi();

function sayIt(){
 var name = document.getElementById("name").value;
 var message = "<h2> Hello " + name + "</h2>";
 //console.log(message);

document.getElementById("content").innerHTML =
message;

if (name === "student"){
  // console.log("student");
  var title = document.getElementById("title");
  console.log(title);
  // title.innerHTML(title + "welcome!");
}

}