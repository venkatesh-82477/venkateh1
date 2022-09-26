//Question 1 ://
    /*function counter(){
    var counter = 0;
    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}
var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());*/

//Question 2: //

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count); 
})();

//Question 3 ://

for(var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

//Question 4: Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.//

function outer(length){
     function inner(breadth){
      let area =length*breadth
      console.log("area of rectangle is " +area)
     }
    inner(5);
}
 outer(6);

//Question 5: Take a variable in outer function and create an inner function to increase the counter every time it is called//

/* A.Closures.
  for example :function counter(){
    var counter = 0;
    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}
var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());*/

//Question 6 :"Print Output"//


var a = 12;
(function () {
  alert(a);
})();

//Question 7 :"Print Output"//

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

//Question 8 :"Print Output"//

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);