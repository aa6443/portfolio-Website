//Javascript Functions 
//function declarations
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");    
}

// sayMyName()   //sayMyName ->it is reference sayMyName()-> it is execution 

// function addTwoNumbers(number1,number2){  //function defination declaration is called **parameters**
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1,number2){  //function defination declaration is called **parameters**
    // let result = number1 + number2
    // return result        //after result nothing will be printed  
    return number1 + number2
}

const result = addTwoNumbers(3,5) //while caling a function if we pass values it is called **arguments** 

// console.log("Result:",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username in the argument ");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Aniket"));
console.log(loginUserMessage());  //it will be undefined not null 

