//Event handling

document.addEventListener("DOMContentLoaded", function(event){
  //unobstrusive event binding
  document.querySelector("button").addEventListener("click", function(){
    var self = this;
    var name = "";

    // Call server to get the name
    // $ajaxUtils.sendGetRequest("http://localhost:8000/data/name.txt", function(request){
    $ajaxUtils.sendGetRequest("/data/name.txt", function(request){
      name = request.responseText; 
      console.log(self.name);
      document.querySelector("#content").innerHTML = "<h2> Hello" + self.name + "!";
    });

    
  });
})