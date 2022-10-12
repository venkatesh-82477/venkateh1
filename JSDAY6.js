/*Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button*/
function execute(){
    let h1 = document.createElement("h1")
    h1.innerText="MEARN stack"
   let d= document.body.insertBefore(h1,document.body.firstChild)
   console.log(d)
}

//Write code to get 1st H1 element from a webpage using DOM//

let head = document.getElementsByTagName("h1")[0]
console.log(head);

//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second//

function getTime(){
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();

    let format = HH >= 12 ? "PM" : "AM" ;
    HH = (HH % 12) || 12 ;
    if(HH < 10){
        HH = "0" + HH;
    }
    if(MM < 10){
        MM = "0" + MM;
    }
    if(SS < 10){
        SS = "0" + SS;
    }

    document.getElementById("HH").innerText=HH;
    document.getElementById("MM").innerText=MM;
    document.getElementById("SS").innerText=SS;
    document.getElementById("format").innerText=format;

    setTimeout(getTime,1000)
}
getTime();

/*Create an HTML page having content as Hello world and a button named Replace Text. 
When user will click on this button page content should be changed to "Welcome to Elevation academy"*/

function Replace(){
    document.getElementById("h2").innerText = "Welcome to Elevation Academy"
}

/*Create an HTML page having content as Hello world and a button named "Hide Text."
 When user will click on this button hide the "Hello World" text*/

function Hide(){
    document.getElementById("h3").style.visibility="hidden"
}

//Given an array of 0's and 1's find out number of 0's//

let arr = [0,1,0,1,0,1,1,0,0]
let count=0;
for(let item of arr){
    if(item===0){
        count++;
    }
}
console.log(count)

//Given an array find out total no. of odd and even nos.//

let array = [1,2,3,4,5,6,7,8,9,11,12]
let even =0;
let odd = 0;
for(let i=0;i<array.length;i++){
    if(array[i]&1===1){
        odd++;
    }
    else  {
        even++;
    }
}
console.log("Total number of odd is = "+ odd)
console.log("Total number of even =" +even)

//Given a string find out number of vowels //
let str =  "Welcome to Elevation Academy"
let string = str.match(/[aeiou]/gi).length;
console.log(string);

//Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same//

let data1 ={
    name :"venkatesh",
    subjects :["maths","AEC","CONTROL systems"]
}
let data2 ={
    name :"kushwanth",
    subjects :["maths","AEC","CONTROL sys"]
}

function func(arr1,arr2){
    if(arr1.length==arr2.length){
        let result = false;
        for(let i=0;i<arr1.length;i++) {
            if(arr1[i]==arr2[i])
            result = true;
            else
            return false
        }
        return result;
    }
    else 
    return false;
}

let result = func(data1.subjects,data2.subjects);
if(result){
    console.log("same")
}
else {
    console.log("different")
}
