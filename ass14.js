//Question 1 : Write one example explaining how you can write a callback function ?//

/*A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action.*/
function call(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
function callMe() {
    console.log('I am callback function');
}
call('Ram', callMe);

/*Question 2 : "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

Explain callback hell.
Numbers
1
2
3
4
5
6
7"*/

function callback (){
    setTimeout(()=>{
        console.log("1")
        setTimeout(()=>{
            console.log("2")
            setTimeout(()=>{
                console.log("3")
                setTimeout(()=>{
                    console.log("4")
                    setTimeout(()=>{
                        console.log("5")
                        setTimeout(()=>{
                            console.log("6")
                            setTimeout(()=>{
                                console.log("7")
                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
    },1000)
}
callback();

/*Question 3 : "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

Numbers
1
2
3
4
5
6
7"*/

function delay(n) {
    return new Promise(resolve => {
        setTimeout(resolve, n);
    });
}
async function print(num) {
    for (let i = 1; i <= num; i++) {

        await delay(i * 1000);

        console.log(i);
    }
}
print(7); 

/* Question 4 :Create a promise function accepting a argument, if yes is passed to the function then it should go 
to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject
 state and catch the error and print Promise Rejected*/

let x = new Promise((resolve, reject) => {
    let y = 25;
    if(y>20) {
        resolve("resolved");
    } else {
        reject("rejected")
    }
})
x.then((data)=>{console.log(data)}).catch((data)=>{console.log(data)})
// Question 5 : Create examples to explain callback function //

 function callBack(name, callback) {
    console.log(name);
    callback();
}
function callMe() {
    console.log('222');
}
callBack('venkatesh', callMe);

//Question 6:Create examples to explain callback hell function//

/*A .Callback Hell is essentially nested callbacks stacked below one another
 forming a pyramid structure. Every callback depends/waits for the previous callback, 
 thereby making a pyramid structure that affects the readability and maintainability of the code.*/ 

 function call(){
 setTimeout(()=>{
    console.log("5")
    setTimeout(()=>{
        console.log("4")
        setTimeout(()=>{
            console.log("3")
            setTimeout(()=>{
                console.log("2")
                setTimeout(()=>{
                    console.log("1")
                },5000)
            },4000)
        },3000)
    },2000)
},1000)
 }
 call();

//Question 7: Create examples to explain promises function ?//

/*Promises are used to handle asynchronous operations in JavaScript. 
They are easy to manage when dealing with multiple asynchronous operations 
where callbacks can create callback hell leading to unmanageable code.*/

let promise = new Promise(function(resolve, reject) {
    const x = "Hello World";
    const y = "Hi"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
  promise.then(function () {
          console.log('Success');
      }).
      catch(function () {
          console.log('Some error has occurred');
      });

//Question 8: Create examples to explain async await function//

async function func(){
    let x = new Promise((resolve, reject) => {
        let y = 30;
        if(y>40) {
            resolve("resolved");
        } else {
            reject("rejected")
        }
    })
    let func1 = (data)=>{console.log(data)};
    let func2 = (data)=>{console.log(data)};
    await x.then(func1).catch(func2);
    console.log("Hi,Hello World")
}
func();

//Question 9 : Create examples to explain promise.all function //

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Bablu');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});