
// Question 1 : Create a Function ?  //

function Check(obj1){
    obj1.setter = function (name) {
      console.log(obj1.name)
    }
  }

// Question 2 : Delete a Parameter //

function Check(obj1) {
    delete obj1.rollno ;
   if ("rollno" in obj1) {
     return"true";
   }
   else {
     return "false";
   }
  }
  
// Question 3 : Check whether the Package is Dream Package or not  //

function Check(obj1) {
    for(let key in obj1){
    if(obj1[key]>= 500000){
      return "Dream";
    }
    else {
      return "NotDream";
    }
    }
  }
  
  
// Question 4 : Check whether the Object has a parameter or not //

function Check(obj1) {
    if (Object.values(obj1).indexOf('1') > -1) {
        return "true" ;
  }
  else {
    return "false";
  }
  }
  
// Question 5 : Merge the Objects  //

function Check(obj1,obj2) {
    let obj3 = Object.assign(obj1,obj2)
    return obj3;
  }
  
  
// Question 6 : Object Multiplyer  //

function Check(a,obj1) {
    obj1.id = obj1.id*a;
    obj1.houseno = obj1.houseno*a;
    return obj1 ;
 }
 
 
// Question 7 : Find the  sum of Object Members  //

function Check(obj1) {
    let sum = 0;
 for (let value of Object.values(obj1)) {
   sum += value;
 }
 return(sum);
 }
 
// Question 8 : Check whether the Objects are same or not.  //


function check(obj1,a,b) {
  
    if(obj1.name===a && obj1.id===b) {
      return "true";
    }
    else {
      return "false";
    }
  }
  