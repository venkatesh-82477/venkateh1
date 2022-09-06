//Question 1: Find the Product. //

const Find_Prod = (arr, N) => 
{
 let prod=1;
 for(let i=0;i<arr.length;i++) {
   prod*=arr[i];
 }
 return prod;
};

//Question 2 : Find the Sum. //

const Find_Sum = (array, N) => 
{ 
  let sum=0;
 for(let i=0;i<array.length;i++) {
   sum=sum+array[i];
 }
 return sum;      
};

//Question 3 : Count Occurrences //

const findCount = (N, K, Arr) => 
{
  let target=K;
  let count=0;
  for(let i=0;i<Arr.length;i++) {
    if ((Arr[i]==target)) {
      count++;
    }
  }
  return (count);
};
 
//Question 4 : Even Odd //


const findEvenOdd = (N, Arr) => 
{
  let B=[];
  let sumeven=0;
  let sumodd=0;
  for (let i=0;i<N;i++) {
    if (Arr[i]%2==0) {
      sumeven+=Arr[i];
    }
    else {
      sumodd+=Arr[i];
    }
  }
  return [sumeven,sumodd];
};
 
//Question 5 : Find whether the number is present or not. //

const Find_Num = (array,N,M) => 
{
  for(let i=0;i<=N;i++) {
    if(array[i]==M) {
      return ("YES");
    }
  }
  return ("NO");
};
 
//Question 6 : Higher Age //

const highAge = (N, Arr) => 
{
  let newarr=[];
 let age=18;
 for(let i=0;i<Arr.length;i++) {
   if(Arr[i] >= age) {
     newarr.push(Arr[i]);
   }
 }
 return newarr ;
};
 
//Question 7 : Increment the Array Elements //

const Inc_Arr = (array,N) => 
{
  for (let i = 0; i < array.length; i++){
    array[i] += 1;
}
  console.log(...array);
};
 
//Question 8 : Pass or Fail  //

const isAllPass = (N, Arr) => 
{ 
 let pass=Arr.every(item=>item>=32);
 if (pass) {
   return("YES");
 }
 else {
   return ("NO");
 }
};
 
//Question 9 : Unique Color Shirt //

function Unique_Shirts (arr,N) {
    let shirts = arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
    return(shirts.length);
  }

//Question 10 : Min and Max //

function arrayMin(arr) {
    let len = arr.length, min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  
  }
  
  function arrayMax(arr) {
   let len = arr.length, max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  
  }
  
//Question 11 : Birthday Game //

function Birthday_Game(arr,D ,M) {
    let count = 0;
       for(let i = 0; i < arr.length - 1; i++){
            let subArray = arr.slice(i, i+M);
            if (subArray.length === M) {
               let sum = subArray.reduce((a,b) => a + b, 0);
               if(sum === D){
                    count += 1;
                }
             }
       }
       return count;
  };
  
  
