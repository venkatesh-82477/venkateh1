// Question 1 : Write the code to access element which is having id as "text" //

let ID = document.getElementById("text")
console.log(ID)

// Question 2 : Write the code to access element which is having tag as "h1" //
let Tag = document.getElementsByTagName("h1")[0]
console.log(Tag);

// Question 3 : Write the code to access element which is having class as "box" //

let Box = document.getElementsByClassName("box")[0]
console.log(Box)

// Question 4 : "<h1>Hello </h1> Change the heading from ""Hello"" to ""Hello World"" using DOM functions" //

let head = document.getElementById("head")
head.innerText = "Hello World"

// Question 5 : Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.//

function execute(){
   let flex =document.getElementsByClassName("flexcon")[0]
   let btn =document.getElementsByTagName("button")[0]
   if(flex.style.flexDirection=="column"){
      flex.style.flexDirection="row"
   }
   else {
      flex.style.flexDirection="column"
   }
}

// Question 6 : What’s the difference between window vs document? //

/*A. Window: The window object representing the window or tab or an iframe sometimes. Window object has properties like browser history, location and the device’s screen etc.
   Document :When a web page is loaded, the browser creates a Document Object Model of the page. The document object represents the whole html document as a tree of Objects(HTML, HEAD, BODY, and other HTML tags). It is the root element that represents the html document.*/

// Question 7 : "<h1>Hello </h1>Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"//

let heading = document.getElementById("heading")
heading.style.color = "red"

//Question 8: Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"//

function paragraph() {
   let p =document.getElementById("para")
   let but =document.getElementById("but")
   if (p.innerText=="Hello World") {
      p.innerText="Welcome to Elevation academy"
   }
   else {
      p.innerText="Hello World"
   }
}

// Question 9 : Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second //

function getTime() {
   let date = new Date();
   let HH = date.getHours();
   let MM = date.getMinutes();
   let SS = date.getSeconds();
   document.getElementById("HH").innerText = HH;
   document.getElementById("MM").innerText = MM;
   document.getElementById("SS").innerText = SS;

   setTimeout(getTime,1000);
}
getTime();

// Question 10 : Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected //

function select1() {
   let sel=document.getElementById("select")
   let displaytext = sel.options[sel.selectedIndex].text
   document.getElementById("textvalue").value =displaytext
}

// Question 11 : "Create a form having name ,email, phone no. , birth year .Add validations - phone no. should start with 91 , it should be 10 digits.email should be domain prepbytes.com, birth year should be > 95" //

function check(){
   let msg1 = document.getElementById("message1");
   let regex1 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   let email = document.getElementById("email").value;
   let lastVal = email.slice(-14);
   let result1 = regex1.test(email);
   if(result1 && lastVal==="@prepbytes.com"){
   msg1.innerText = " Email is Valid"
   }
   else{
   msg1.innerText = " Email is InValid"
   }
   let msg2 = document.getElementById("message2");
   let regex2 = /^[9]+[1]+[0-9]{8}$/;
   let phone = document.getElementById("phone").value;
   let result2 = regex2.test(phone);
   if(result2){
   msg2.innerText = " Phone Number is Valid"
   }
   else{
   msg2.innerText = " Phone Number is Invalid"
   }
   let msg3 = document.getElementById("message3");
   let year = document.getElementById("birthYear").value;
   let year1 = parseInt(year.slice(0,4));
   if(year1 > 1995){
   msg3.innerText = " Birth Year is valid"
   }
   else{
   msg3.innerText = " Birth Year is Invalid"
   }
   }
   