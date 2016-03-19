// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.faveColor = "blue";
// console.log(company["name"]);

// var face
// book = {
//   name: "Facebook",
//   ceo : {
//     firstName: "Mark",
//     faveColor: "Blue"
//   },
//   $stock: 110
// };

// console.log(facebook);

// function m(x,y){
//   return x * y;
// }

// m.version = "v1.0";

// function mM(multiplier){
//   var myFunc = function(x){
//     return multiplier * x;
//   };
//   return myFunc;
// }

// var mB = mM(3);
// console.log(mB(10));

// function multiply(x, y){
//   return x * y;
// }


// function makeMultiplier(multiplier){
//   var myFunc = function(x){
//     return multiplier * x;
//   };
//   return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// var doubleAll = makeMultiplier(2)''

// //passing functions as arguments

// function doOperationOn(x, operation){
//   return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);

// var yo = doOperationOn(100, doubleAll);


// function mult(multiplier){
//   var func = function(x){
//     return multiplier * x;
//   }
//   return func;
// }

// var double = mult(2)

// console.log(double(4));


// function Circle(radius){
//   this.radius = radius;
// }

// Circle.prototype.getArea = function(){
//   return (Math.PI * Math.pow(this.radius, 2));
// }

// var circle1 = new Circle(10);
// console.log(circle1.getArea());


// var littleCirlce = {
//   radius: 10,
//   getArea: function(){
//     var self = this;
//     function changeRadius(){
//       self.radius += 10;
//     }
//     changeRadius();
//     return (Math.PI * Math.pow(this.radius, 2));
//   }
// }

// console.log("yes");
// console.log(typeof(littleCirlce));
// console.log(littleCirlce.getArea());

// var arr = [1,2,3];

// for(var i=0, l =arr.length; i<l; i++){
//   console.log(arr[i]);
// }


function t(){
  console.log(this);
}
 t();









