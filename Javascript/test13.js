//SCOPE 
//GLOBAL AND LOCAL SCOPE 
// var c 300
let a = 300
if (true) {
    
    let a = 10
    const b = 20 
    console.log("INNER:",a);
    // var c = 30       //not used it doesnt case about scope
}           //Scope 

console.log(a);
// console.log(b);
// console.log(c);
