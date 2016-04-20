//Event handling

document.addEventListener("DOMContentLoaded", function(event){
  //unobstrusive event binding
  document.querySelector("button").addEventListener("click", function(){
    // var self = this;
    // var name = "";

    // Call server to get the name
    // $ajaxUtils.sendGetRequest("http://localhost:8000/data/name.txt", function(request){
    $ajaxUtils.sendGetRequest("/data/name.json", function(res){
      var message = res.firstName + " " + res.lastName;
      if (res.likesChineseFood){
        message += "likes Chinese food";
      }
      else {
        message += " does not like chinese food";
      }
      message += " and uses ";
      message += res.numberOfDisplays;
      message += " displays for coding.";
    });

    
  });
})