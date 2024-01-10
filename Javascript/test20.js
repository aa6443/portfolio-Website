//truthy and falsy value 
// if there is string-> assumed to be true value 
//if empty string -> assumed to be false value 
// const userEmail = "aniket.ai"

// if(userEmail){
//     console.log("Got User Email");
// }
// else{
//     console.log("Don't have user email");
// }

//falsy values
/*  
false, 0 , -0 ,BigInt , 0n ,"",null , undefined,NaN
*/

//truthy value 
/*
"0",'false'," ",[],{},function(){}//empty function 
*/

// const userEmail1 = []
// if(userEmail.length === 0){
//     console.log("Array is empty ");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0 ){
//     console.log("Object is empty ");
// }

//Note
/*
false == 0 //true 
false == "" // true 
0 == "" //true 
*/


//NULLISH COALESCING OPERATOR (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10   // 10
// val1 = undefined ?? 15  //15 assigned
val1 = null ?? 10 ??15 //first value it get is assigned


console.log(val1);

//TERNARY OPERATOR 
// condition ? true : false

const iceTeaPrice =  100 
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");   
