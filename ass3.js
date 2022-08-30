//Question 1: Find the number of digits   //

const Find_Digits = (N) => 
{
	 let count=0;
  while (N!=0){
    N=parseInt(N/10);
    count++;
  }
  return count;
};

//Question 2: Find the Fives.//

const Find_Five = (N) => 
{
  let count=0;
  while (N!=0){
    let digit=N%10;
    if (digit==5) {
      count++;
    }
    N=parseInt(N/10)
  }
  return count;	 
};

//Question 3: Find Sum //

const findSum = (n) => {
    let i, sum = 0;  
          for (i = 2; i <= n; i+=2) {  
              sum += i;  
          }  
          return sum; 
  };

//Question 4: Find the sum of the digits of a given number.//

const Number_Sum = (N) => 
{
  let sum=0;
  while (N!=0){
    let digit=N%10;
    sum =sum+digit;
    N=parseInt(N/10);
  }
  return (sum)
};

//Question 5: Print the Odds. //

const Print_Odd = (N) => 
{
for (i=2;i<=N;i++) {
  if(i==2 || i%2!==0) {
    console.log(i) ;
  }
}
};

//Question 6: Print the Pattern.//

const Print_pattern = (N) => 
{
  for (let i = 1; i <= N; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
  str += "*";
     }
  console.log(str);
}
};

//Question 7: Check whether a Number is a prime or not. //

const Prime_Check = (N) => 
{
 let i=N-1,prime=0 ;
 while (i!=1) {
   if (N%i===0) {
     prime=1;
     break;
   }
   i--;
 }
 if(prime==0){ 
   return ("YES");
 }
 else {
   return ("NO");
 }
};

//Question 8: Print Numbers //

const printNumbers = (n) => {
    for (let i = 1; i <= n; i++) {
  console. log(i);
  }
  };

//Question 9: Print the Table. //

const Print_Table = (N) => 
{
  const number = parseInt(N);
for(let i = 1; i <=10; i++) {
    const result = i * number;
    const result1=`${number} * ${i} = ${result}`
    console.log(result1);
}
};