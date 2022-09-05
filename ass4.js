//Question 1: Create one function with zero parameter having a console statement;//

function func() {
    console.log(func);
}
func();

//Question 2: Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7" //

function para(x,y) {
    console.log(x+y) ;
}
para(3,4);

//Question 3: Create one arrow function //

const arrow = () => {
    console.log();
}

//Question 4 : //


/*var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
}
girl ();

//output : Undefined //

//Question 5 :"Print output:// 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};*/

//output : 21 //

//Question 6: "Print output://

/*var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};*/
//output: not-defined//

//Question 7: Write a function that accepts parameter n and returns factorial of n //

let factorial=(n) =>{

    if (n <= 1){
    return 1;
    }
    else
   {
    return (n * factorial(n - 1));
   } 
}
console.log(factorial(3));
