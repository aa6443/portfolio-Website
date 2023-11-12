//Memory 
//1. Stack(Prmitive) ->we get copy of variable we declaired 
//2. Heap(Non-Primitive) ->we get reference of the original value 

let myYoutubename = "aniketkumar"

let anothername = myYoutubename 

anothername = "chaiaurcode"
// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "aniket@google.com";
console.log(userOne.email);
console.log(userTwo.email);

