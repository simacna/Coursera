// johnGreeting.sayHello();
// //sinaGreeting.sayHi();
// sayHi();

function sayIt(){
  console.log(this);
 var name = document.getElementById("name").value;
 var message = "<h2> Hello " + name + "</h2>";
 //console.log(message);

document.getElementById("content").innerHTML =
message;

//var button = document.querySelector("button").textContent;
//console.log(button);

this.textContent = "Said it!";
//document.querySelector("button").textContent= name;

if (name === "student"){
  // console.log("student");
  // var title = document.getElementById("title");
  // console.log(title);
  // title.innerHTML(title + "welcome!");


  //below we could also use .querySelector("h1")
  //since there's only one h1 on the page
  
  var title = document
  .querySelector("#title")
  .textContent;

  title += " loveeee";

  document.querySelector("#title").textContent = title;
  }
}

// Below are different ways of handling events
//without adding onclick to html

// document.querySelector("button")
// .addEventListener("click", sayIt);

document.querySelector("button").onclick = sayIt;