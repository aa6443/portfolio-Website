//Dates and Time in javascript 
//date is calculated from January 1,1970 
let myDate = new Date()
// console.log(myDate.toString()); //**** */
// console.log("      ");
// console.log(myDate.toDateString());//*** */
// console.log("      ");
// console.log(myDate.toISOString());//*** */
// console.log("      ");
// console.log(myDate.toLocaleDateString());
// console.log("      ");
// console.log(myDate.toLocaleString());
// console.log("      ");
// console.log(myDate.toLocaleTimeString());
// console.log("      ");
// console.log(myDate.toTimeString());
// console.log("      ");
// console.log(myDate.toUTCString());

// console.log(myDate.toJSON);

// console.log(typeof myDate);

// let myCreateDate = new Date(2023 , 0 ,23 ) 
let myCreateDate = new Date("01-14-2023" ) 
//month starts from zero in javascript 
// console.log(myCreateDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
//for months 
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday: "long",
})

