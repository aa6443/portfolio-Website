const marvel_heroes = ["thor","Ironman","Spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)           //works on the same array 

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)//Creates a merged new array 
// console.log(allHeroes);
//SPREAD method for union of two arrays 
const all_new_heroes = [...marvel_heroes,...dc_heroes]   //This is more preferabe 
// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //spreaded all the arrays inside array in single array
console.log(real_another_array);

console.log(Array.isArray("Aniket"));
console.log(Array.from("Aniket")); //convert everything into array 
console.log(Array.from({name: "hitesh"})); //interesting case -> when unable to convert returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 , score3 )); //putting all the values and creating an array from individual element 

//Araay.from  method
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

//Array.of method 
console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]
