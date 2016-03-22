// var johnGreeting = {};

// johnGreeting.name = "John";
// johnGreeting.sayHello = function(){
//   console.log("HELLO " + johnGreeting.name);
// }
// var m = num;
function FirstFactorial(num) { 
  var m = 1; 
  for(var i = 2; i <= num; i++){
    // console.log(m*i);
    m *= i;
  }
  // code goes here  
  // return num;
  // return m; 

  // var val = 1;
  // for (var i = 2; i <= num; i++){
  //   val *= i;
  // }
  // return val;
  return m;
         
}

console.log(FirstFactorial(4));