//Function with objects 

function calculateCartPrice(val1,val2,...num1) { //rest or spread operator
    return num1
}

console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "aniket",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}


// handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [ 200, 400 , 100 , 600 ]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));