//Higher order array loops 
/*
1.for in 
2.for of 
3.for each
*/

//for of 
//["" ,"" ,""]
//[{},{},{}]

const arr = [ 1,2 ,3 ,4 ,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

//MAPS

const map = new Map()
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
//it wont work 
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }