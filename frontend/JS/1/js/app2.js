//one type of event handler

function sayIt(event){
  var button = this;
  button.innerHTML = "yo";
  var message = document.getElementById("name").value;
  document.getElementById("content").innerHTML = message;
}

//unobstrusive event binding

// document.querySelector("button").addEventListener("click", sayHello);
document.querySelector("button")
.addEventListener("click", sayIt);