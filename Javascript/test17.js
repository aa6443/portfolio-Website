//Code Execution in Javascript 

// Javascript Execution context 

// 1.Global Execution Context -> this 
//Single threaded 
 
// 2.Function Execution Context 

//3.IN MONGOOSE  
//Eval Exectuion Context 

//JS run in two phases 
//1.Memory creation phase or creation phase 
//2.Execution phase 

let val1 = 10 
let val2 = 5
function addNum(num1, num2){
    let total  = num1 + num2 
    return total 
}
let result1 = addNum(val1 , val2)
let result2 = addNum(10 , 2)

this.addNum;
