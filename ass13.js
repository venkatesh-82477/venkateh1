//Question 1 :Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype//

let obj1 = {
    name:"Govindh",
    rollno:22
}
let obj2 = {
    name:"ramu",
    age : 25
}
obj1.__proto__ = obj2;
console.log(obj2)
//Question 2 : Write code to explain prototype chaining //

function Student(name,age){
    this.name = name;
    this.age = age; 
}
let student = new Student('Ramu',22)
console.log(student)

//Question 3 : Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays//

Array.prototype.SumArray = function (arr) {

    let sum = this.map(function (num, ind) {
      return num + arr[ind];
    });

    return sum;
}
let array1 = [1,2,3,4];
let array2 = [5,6,7,8];
let sum = array1.SumArray(array2);
console.log(sum); 

//Question 4 : Write a JavaScript function to retrieve all the names of object's own and inherited properties.//

function own(obj) {
    if (!isObject(obj)) return [];
    let keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    let type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(own(new Student("Ramu")));
