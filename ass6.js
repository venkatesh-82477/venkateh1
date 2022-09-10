// Question 1 : Count Characters  //

const countCharacters = (S) => 
{
  let count=0;
  let count1=0;
  for(i=0;i<S.length;i++){
    if(S[i]=='A'){
      count++
    }if(S[i]=='D')
      {
      count1++
    }
  }
  return [count,count1]
}


// Question 2 : Count the Heads  //

var Count_Occ = (s) => 
{
 let count=1;
    let str='';
    let op="";
    for(let i=0;i<s.length;i++){
      for(j=i+1;j<s.length;j++){
        if(s[i]==s[j]){
          count++;
        }
      }
      if(count>1){
        str=s[i];
        op=op+" "+s[i]+count;
        s=s.replace(str,' ');
        s=s.split(str).join('');
      }
      count=1;
    }
    return op.split(' ').sort().join('');

};
 

// Question 3 : Count the Vowels  //

var Count_Vowels= (S) => 
{
 let count = S.match(/[aeiou]/gi).length;
    return count;
};
 

// Question 4 : Concatenate the Strings  //

var Concatenate_Strings = (S1, S2) => 
{
  let S3 = S1.concat(S2);
   return S3 ;
};
 

// Question 5 : Find Length  //

const findLength = (S) => 
{
  return(S.length);  
};
 

// Question 6 : Find the Winner  //

var Game_Winner = (S) => 
{
   let A=0;
   let D=0;
  for(let i=0;i < S.length;i++){
    if(S[i]=="A"){
      A++
    }
    else
    {
      D++
    }
  }
    if(A>D){
      return "Aditya"
    }
    else if(A<D)
    {
      return "Danish"
    }
    else if (A===D)
    {
      return "Draw"
    }
}
 

// Question 7 : Join Strings  //

const joinStrings = (S, P) => 
{
  let result=S.concat(P);
  return result ;
};
 

// Question 8 : Plaindrome Check  //

var Palin_Check = (str) =>
{
	let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return 'False';
        }
    }
    return 'True'; 
}


// Question 9 : Reverse the String  //

var Reverse_String = (str) => 
{ 
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// Question 10 : Match the Strings //

var String_Match = (S1,S2) => 
{
  if (S1==S2) {
    return "YES" ;
  } 
  else {
    return "NO" ;
  }
};
 

// Question 11 : String Replace  //

var Replace = (S, pattern , text) => 
{
   let newstr = S.replace(pattern,text) ;
   return newstr;
};
 

// Question 12 : Split the String  //

var Split_the_string = (S) => 
{
  let split = S.split(" ");
  return split ;
};
 

// Question 13 : Count the Vowels and Consonants  //

var Count_Vowels= (S) => 
{  
    let count = S.match(/[aeiou]/gi).length;
    return count;
};
var Count_Consonants= (S) => 
{
    let count = S.match(/[^aeiou]/gi).length;
    return count;    
};
 
