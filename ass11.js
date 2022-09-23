/* Question 1: "let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] "
"Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

['JOHN', 'BABA', 'YAGA', 'WICK']*/


let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ]
          let upper = studentRecords.map(names => names.name.toUpperCase());
           console.log(upper);

/* "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
        [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"*/
 
        let details = studentRecords.filter(stu => stu.marks > 50);
        console.log(details);

//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.//
     
       let names = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
       console.log(names);

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.//

       let TotalMarks = studentRecords.reduce(((pv,cv) => pv+cv.marks), 0)
       console.log(TotalMarks);

//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.// 

      let Names = studentRecords.filter(stud => stud.marks > 50).map(stud => stud.name)
      console.log(Names); 

// Question 6: This time we are required to print the sum of marks of the students with id > 120.//

      let totalMarks = studentRecords.filter(stud => stud.id > 120).reduce((PV,CV) => PV + CV.marks ,0)
      console.log(totalMarks);

//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.//

      let totalmarks = studentRecords.map(function(stu){ 
        if(stu.marks < 50){
            stu.marks += 15;
        }
        return stu;
    }).filter(stu => stu.marks > 50).reduce((p_v,c_v) => p_v+c_v.marks, 0);
    console.log(totalmarks);


//Question 8:Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.//
     let arr =[{name:'Venkatesh',class:"II",rollno:10},
               {name:'Kushwanth',class:"III",rollno:11},
               {name:'Likith',class:"IV",rollno:12},
               {name:'Rohit',class:"V",rollno:13},
               {name:'Jyothish',class:"VI",rollno:14},
               {name:'Naveen',class:"VII",rollno:15},]

            console.log(arr);