//Objects in JS
//1.singleton     
//  Object.create ->constructor method  | we get singleton in this  

//object literals
const mySym = Symbol("key1")
const JsUser={
    name: "Aniket",    //name here is processed as string although we need not write it as "name "
    age : 18 ,
    "full name": "Aniket Kumar",  //we cannot access it with dot (.) operator 
    [mySym]: "mykey1",   //syntax of symbol [symbol] always written in square brackets 
    location: "Chennai",
    email: "aniket@atlassian.com",
    isLoggedIn: false ,
    lastLogInDays: ["monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);  //in this we have to take stringa then only it will work \
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); //even we can use it with only square bracket

JsUser.email = "aniket@sprinklr.com"
// Object.freeze(JsUser) //freezing object will disable the user from modifying the data 
JsUser.email = "aniket@google.com"
// console.log(JsUser);

JsUser.greeting=function () {
    console.log("Hello Js user");
}
JsUser.greetingTwo=function () {
    console.log(`Hello Js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

