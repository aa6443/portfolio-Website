//types of data => 1.Primitive (Call by Value)       2.Non-Primitive(Reference type )

//1.Primitive  (Call by Value)
// 7 types : String, Number ,Boolean , null ,undefined ,Symbol,BigInt

//Javascript is dynamically typed => datatypes are determined in runtime and can change throughout the program 

// const score = 100 
// const score = 100.3 

const isLoggedIn = false
const outsideTemp = null 
let userEmail;//undefined 

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);

// const bigNumber = 4684983959586776342n //bigint

//Reference (Non Primitive)

//Arrays, Objects , Functions 

//Arrays
const heros = ["shaktiman" , "naagraj" , "doga"]; 

//objects 
let myObj = {       //Everything inside curly braces is data types 
    name :"aniket",
    age: 22
}

//Function 
const myFunction= function (){
    console.log("Hello World");
}

console.log(typeof bigNumber);  //UNDEFINED 
