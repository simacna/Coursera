(function(global){

  //set up a namespace for our utility
  var ajaxUtils = {};

  //Returns an HTTP request object

  function getRequestObject(){
    if (window.XMLHttpRequest()){
      return (new XMLHttpRequest());
    }
    else if(window.ActiveXObject){
      //for very old IE browsers (optional)
      return (new ActiveXObject("Microsoft.XMLHTTP"));
    }
    else{
      global.alert("Ajax is not supported");
      return(null);
    }
  }
})