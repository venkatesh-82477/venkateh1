//Question 1:Add two Numbers//
const AddTwoNumbers = (a,b) => {
    return a+b ;
};
//Question 2:Find if the conditions are obeyed or not?//

const Is_Valid = (a,b) => {
    return a>b ;
  };

//Question 3:Check the conditons//

const Check = (A, B) => 
{
 return (A %10 == 0) || (B % 10 == 0) ;
}

//Question 4:Find the first digit of a 4 digit number//


const First_Digit = (n) => {
    a=n%1000 ;
    b=(n-a)/1000 ;
    return b ;
  }

//Question 5 :Find the last digit of a 4 digit number//

const Last_Digit = (n) => {
    return n%10 
  };

//Question 6: Find the remainder//


const Find_the_remainder = (a,b) => {
    return b%a ;  
 };
 
//Question 7: Multipy two Numbers//


const Multiply_two_number = (a,b) => {
    return a*b ;
};

//Question 8: Marks Calculator//

const Sum = (A, B, C) => 
{
 return  A+B+C ;
};

const Average = (A, B, C) => 
{
  return (A+B+C)/3 ;
};
