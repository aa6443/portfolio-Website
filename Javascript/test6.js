//Arrays in Javascript 
const myArr = [0,1,2,3,4,5]  //Arrays are objects
//JS arrays are resizable
// console.log(myArr[0]);
// const myHeroes = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(Array(2));

//Array Methods
// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)  //it is used top shift the array value to first index and we have to move all the remaining to next place
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join()    //conerted it to string 
// console.log(myArr);
// console.log( typeof newArr);


//SLICE ,SPLICE

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // 1. last index not printed 2.original array remain as it is

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)  // 1. last index included 2.the splice portion is removed from original array 
console.log("C ", myArr);

console.log(myn2);

