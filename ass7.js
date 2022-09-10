
// Question 1 : Find the Smaller Angle //

var Minimal_Angle = (h, m) => 
{
     h = h % 12;
  let hm = 0.5 * m, 
      hh = 30 * h, 
      ma = 6 * m, 
      sum = Math.abs(hm + hh - ma); 
  return  sum ;
};
 
// Question 2 : Check whether the year is Leap year or not. //

var Check_Leap = (year) => 
{
   if((year % 4==0) && (year%100!=0)) {
     return ("Leap Year")
   }
else if(year%400==0){
  return ("Leap Year");
}
else {
  return ("Non Leap Year");
}
};
 
// Question 3 : Perfect Number Check.  //

var Perfect_Check = (N) => 
{
   let sum = 0;
   for (let i=1;i<= N;i++) {
     if(N%i==0) {
       sum = sum + i;
     }
   }
   if (sum==N) {
     return "YES";
   }
   else {
     return "NO" ;
   }
};
 
// Question 4 : Reverse a Number. //

var Reverse_Number = (N) => 
{
  return parseInt(N.toString().split('').reverse().join('')) * Math.sign(N)
};
 
// Question 5 : Substring Check.  //

var Substring_Check = (S1, S2) => 
{
    if(S1.includes(S2)){ 
      return "YES" ;
    }
    else {
      return "NO";
    }
};
 
