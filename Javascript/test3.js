//Strings
const name = "aniket"
const repoCount = 50

// console.log(name + repoCount + "value");


//     ****recommended practice***************************************************************************** 
/console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);      // ` -> called as back-ticks modernn way of using js
//the above is called as string interpolation 

const gameName = new String(`hitesh-hc-com`)  //gives key value pair 
// console.log(gameName[0]);
            //or 
// console.log(gameName,__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
//reverse of charat
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,4)  //4 not included printed till 3
// console.log(newString);

// const anottherString= gameName.slice(-8,4)//negative value allowed
// console.log(anottherString);

//trim
const newStringOne = "     aniket     "
// console.log(newStringOne);
// console.log(newStringOne.trim());

//REPLACE 
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('dogesh'));

console.log(gameName.split('-'));