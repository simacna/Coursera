(function(global){
  //set up a namespace for our utility
  //we attach things to ajaxUtils that we want to expose to the outside world
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

  //Makes an ajax GET request to 'requestUrl'



  ajaxUtils.sendGetRequest = 
    function(requestUrl, responseHandler){
      var request = getRequestObject();
      request.onreadystatechange = function(){
     
        handleResponse(request, responseHandler);
      };
      request.open("GET", requestUrl, true);
      request.send(null); //for post only
    }

  //only calls user provided 'responseHandler'
  //function if response is ready
  //and not an error

  function handleResponse(request, responseHandler){
    if ((request.readystate == 4) &&
        (request.status == 200)){
          responseHandler(request);
    }
  }

  // expose utility to the global object
  global.$ajaxUtils = ajaxUtils;

})(window);