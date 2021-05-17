// var number1 = 25;
// var number2 = 25;
// console.log(number1 + number2);

// data types in Javascript

// strings
// var str1 = "this is a string";
// var str2 = "this is also a string";
// numbers
// var num1 = 455;
// var num2 = 56.25;
// objects
// var marks = {
//   ravi: 34,
//   shubham: 78,
//   pro: 99.999,
// };

// // Booleans
// var a = true;
// var b = false;

// undefined
// var und;
// var unf = undefined;

// Null
// var nun = null;

// Datatypes
// 1.Primitive(undefined, null, number, string, boolean, symbol)
// 2. Reference (Arrays and Objects)

// arrays(Collections Of elements)
// var arr = [25, 25, 50, 51, 14546];

// functions
// function avg(a, b) {
//   c = a + b;
//   return c;
// }

// c1 = avg(4, 6);
// console.log(c1);

// Condotion in Javascript
/* var age = 34;
if (age > 18){
    console.log("you are not a kid");
}
else if (age > 2){
    console.log("padai pe dhyan de string pe nhi");
}
else{
    console.log("you are a kid");
} */

// Loops in Javascript
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// For Loop
// for (var i = 0; i < arr.length; i++){
//   console.log(arr);
// }

// ForEach Loop
// arr.forEach(function(element){
//     console.log(element);
// })

// Var Let Constant
// var t=0;
// let j = 0;
// const ac = 0;

// while loop
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do while loop with Break And Continue
// do{
//     j++;
//     // Continue
//     if(j==3){
//         continue;
//     }
//     console.log(arr[j]);
//     // Break
//     if(j==8){
//         break;
//     }
// }while(j<arr[j]);

// Array Methods
// let myarr=["tan", "fan", "can", 34 , null, true, undefined];
// console.log(myarr);
// myarr.pop();//used to or hide the last element
// myarr.push("Hero");//Push a element in the last of the array
// myarr.shift();//delete a elemnet at first place
// myarr.unshift("heroatfirstplace");//add a element at first place
// const newline = myarr.unshift("heroatfirstplace");//it used to show the legth of the array after placing this, if we use direct to console.log it works as same
// There are to many other array methodssuch as "tostring" to convert all in string and "sort" to sort in alphabatically
// console.log(myarr);

// string methods in Javascript
// let stringm = "hello i am rohit deshmukh rohit"
// console.group(stringm);
// console.log(stringm.length);//it shows the total length of the string with spaces
// console.log(stringm.indexOf("rohit"));//It shows the where from the first or this is started
// console.log(stringm.lastIndexOf("rohit"));//this is started from councting from the last
// console.log(stringm.slice(1,5));//It shows the selected words from the string with last one of n-1
// d = stringm.replace("rohit", "tusar");//it replaces the first value that comes first with the given value
// console.log(d);


// Dates in Javasccript
// let mydate = new Date();
// console.log(mydate);//there are to many or that gives us the specified info about the date and time

// DOM Manuplation
// document.getElementById("buttons").style.background = "yellow";  //calling the HTML Element by There ID And Give Them a Fuction
// document.getElementsByClassName("buttons");  //calling the HTML Element by There classname And Give Them a Fuction
// document.getElementsByTagName("button");  //calling the HTML Element by there Tags name
// document.getElementById("para").classList.add("testingdom");  //adds the class name in the html website
// document.getElementById("para").classList.remove("testingdom");  //Removes the class name in the html website
// document.getElementById("para").innerText  //shows th einner text only text that we writes there
// document.getElementById("para").innerHTML  //shows th inner HTML of the class ir id
// createdele = document.createElement('p');
// createdele.innerText = "HEllo world this is created by the javascript createelement";
// document.getElementById('para').appendChild(createdele);
// createdele2 = document.createElement('b');
// createdele2.innerText = "HEllo world this is Replaced by the javascript createelement22222";
// document.getElementById('para').replaceChild(createdele2, createdele);
// removechild is used to remove it


// Selecting Using query
// console.log(document.querySelector(".container"));//Gives the query of the selected Item of only one of them comes first
// console.log(document.querySelectorAll(".container")); //Gives the query of the all items that have the ids or class

// Events in Javascript
// function clicked(){
//     console.log("Button Was CLicked");
// }

// It is used to run a fuction after the window is loaded
// window.onload = function(){
//     console.log("hellor the document is loaded");
// }

//  Adding a event listener to any object
// let prevHTML = document.querySelector('#para').innerHTML;
// document.getElementById('para').addEventListener('mousedown', function(){
//     document.querySelector('#para').innerHTML = "<br> Hello World To KEse Chal raha hai ajj kal"
// })
// document.getElementById('para').addEventListener('mouseup', function(){
//     document.querySelector('#para').innerHTML = prevHTML;
// })

// arrow Function !!Also Used to define Function  with arrows uese in between code
summ = (a,b)=> {
    let c = a+b;
    return c;
}

// Set Time Out Set Interval
// let tarif = 0;
// function timer(){
//     // for(ter = 0,ter=10,ter++){
//         // console.log(ter);
//         document.querySelector('#para').innerHTML = "This iS A TImer That Restarts After "+tarif;
//         tarif++;
//     // }
// }
// bamses = setInterval(timer, 1000);


// Javascript Local Storage !!use to store small or notsensitve data
// localStorage.setItem('name', 'Tusar');
// localStorage.getitem('name'); //used to get item from the localstorage
// localStorage.clear(); //used to clear the local storage
// localStorage.removeItem(): //used to remove a specific item

// Json //Use to Exchange Data !!it is used to excahnge data in changing thise in string to excahnge easily
exobj = {name: 'hello',lenght: 1};
exjs = JSON.stringify(exobj); //stringfy is used to convert anything into string to transport or sxchange it
exparse = JSON.parse(exjs); //parse is used to convert the JSON stringfy into Javascript Code

// Typeof //used to show the toye of whatever
