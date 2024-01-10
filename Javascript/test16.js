//Immediately Invoked Function Expressions (IIFE)
//we use IIFE to remove global scope variable pollution 
(function chai(){
    //named IIFE 
    console.log(`DB CONNECTED `);
})();  //; ->SEMICOLON to end the function else error occurs 

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}
)('aniket');   //First parenthesis for function Second parenthesis for execution

