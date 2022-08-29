//Question 1 :Calculator //

const Calculator = (A, B, C) => 
{
switch (A) {
  case '+' : {
	    return(B+C) ;
	    break ;
  }
	  case '-' : {
	    return(B-C) ;
	    break ;
	  }
	   case '*' : {
	    return(B*C) ;
	    break ;
	  }
	  case '/' : {
	    return (B/C) ;
	    break ;
	  }
	}
};

//Question 2 :Check whether the condition is fulfilled or not? //

const Check_divisibility = (N) => {
    if (((N)%6==0) && ((N)%9==0)) {
        return ("Divisible by both") ;
      }
    else {
        return ("Not Divisible by both")
      }
    }
    
//Question 3 :Eligible Voter //


const isEligible = (a) => {
    if (a>18) {
      return ("Eligible for Voting") ;
    }
    else {
      return ("Not Eligible for Voting") ;
    }
  };
  
//Question 4 :Find Relation //  


const findRelation = (x,y) => {
    if (x<y) {
      return (x +" is smaller than "+ y) ;
    }
    else if (x>y) {
      return (x +" is greater than "+ y) ;
    }
    else if(x=y){
      return (x +" is equal to "+ y) ;
    }
  };
  
//Question 5 :Find Grades // 

const findGrades = (a) => {
    switch(true) {
     case (a<=10): {
       return ("E") ;
       break ;
     }
     case (a<=20): {
       return ("D") ;
       break ;
     }
     case ((a)<=30): {
       return ("C") ;
       break ;
     }
     case (a<=40): {
       return ("B") ;
       break ;
     }
     case (a<=50): {
       return ("A") ;
       break ;
     }
   }  
 };
 
//Question 6 :Get Value // 

const getValue = (a) => {
    if (a=='p' || a=='P') {
      return ("PrepBytes") ;
    }
    else if (a=='z' || a=='Z') {
      return ("Zenith") ;
    }
    else if (a=='e' || a=='E') {
      return ("Expert Coder") ;
    }
    else {
      return ("Data Structure") ;
    }
  };
  
//Question 7 :Find the maximum out of three numbers. //  

const Max_out_of_three = (A,B,C) => {
    if(A > B && A > C) {
      return (A) ;
  }
  else if (B > A && B > C) {
      return (B) ; 
  }
  else if (C > A && C > B){
      return (C) ;
  }
  else {
    return -1 ;
  }
  };
  
//Question 8 :Second Smallest  //


const findSndSmallest = (x,y,z) => {
    if((x>y)&&(x>z))
  {
  if(y>z)
  return y;
  else
  return z;
  }
  
  else if((y>x)&&(y>z))
  {
  if(x>z)
  return x;
  else
  return z;
  }
  
  else if((z>x)&&(z>y))
  {
  if(x>y)
  return x;
  else
  return y;
  }      
  } 
  
//Question 9 :Check whether the triangle is Acute or Obtuse  //

const Triangle_Check = (A,B,C) => {
    if ( C^2 > A^2 + B^2) {
      return ("obtuse") ;
    }
    else if ( C^2 < A^2 + B^2) {
      return ("acute") ;
    }
  };
  
  