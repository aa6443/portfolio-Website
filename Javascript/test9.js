//Objects in depth part 2 
//1.singleton or constructor 

// const tinderUser = new Object()  //singleton object

//another way
const tinderUser =  {} //Non singleton object 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "aniket",
            lastname:"kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1,obj2};
// const obj3=Object.assign({},obj1,obj2); //Combining objects 

const obj3 ={...obj1,...obj2};//Mostly used 
// console.log(obj3);

const users = [
    {  
        id: 1,
        email: "h@gmail.com"
    },
    {  
        id: 1,
        email: "h@gmail.com"
    },
    {  
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//We created an array for this for easier use
console.log(Object.values(tinderUser));//We created an array for this for easier use
console.log(Object.entries(tinderUser));//We created an array for this for easier use


console.log(tinderUser.hasOwnProperty('isLoggedIn'));