//Logic control or Control Flow 

//if statement 

const isUserLoggedIn = true 
const temperature = 41
// if(temperature === 41 ){
//     console.log("less than 50 ");
// }else{
//     console.log("temperature is greater than 50");
// }
// console.log("execute");
// <,>, <= ,>= , == , != , === (when even data type is imp use ===)
//  !== 

const score = 200 
//var -> global scope 
// if (score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000
//Implicit scope 
// if (balance > 500 ) console.log("test"); //valid in single line 
// we can write it in many lines also 
// if (balance > 500 ) console.log("test"),
// console.log("test2");

// const balance = 1000

// if(balance < 500 ){
//     console.log("less than 500");
// } 
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200 ");
// }

const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false 
const loggedInFromEmail = true  

if (userLoggedIn && debitCard && 2== 3) {
    console.log("allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}