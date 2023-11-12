//conversion and operations 

// let score = "33abc"
// let score1 = null
// console.log(typeof(score))

// let valueInNumber = Number(score) //n is capital  //conversion of datatype into NUMber
// console.log(typeof(valueInNumber))
// console.log((valueInNumber)) // NaN -> Not a Number 
// console.log(Number(score1))
//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//string => NaN 

// let isLoggedIn = "a"
// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//1 => true ; 0=> false
//"" => false 
//"aniket"  => true 

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber)

// ******************** Operations *******************************************

let value =  3
let negValue = - value 
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //power 
// console.log(2/3);  //division 
// console.log(2%3);  //remainder   //mostly used in cryptographies 

let str1 = "hello"
let str2 = " Aniket"
let str3= str1+str2
// // console.log(str3)

// console.log("1" + 2);
// console.log(1+ "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");  // 1+2 = 3  then 3+"2"=32
// console.log(+true);
// console.log(+"");

// let num1,num2,num3 
// num1 = num2 = num3 = 2 + 2

// let gameCounter = 100 
// gameCounter++;
// ++gameCounter;
// console.log(gameCounter);

// console.log("2">1);
// console.log("02">1);
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// console.log(null<=0);  //null converted to 0
//The reason is that an equality check == and comparisons > < >= <= work differently 
//comparisons convert null to a number treating it as 0
//that is why null >= 0 is true and (1) null >0 is false 

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === strict check 
console.log("2" === 2);


