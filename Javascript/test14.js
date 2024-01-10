//Scope level and mini hoisting 

function one(){
    const username = "aniket"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "aniket"
    if (username === "aniket") {
        const website = "youtube "
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//******************Interesting *********** */

//simple function - can be accesed even before declaration 
console.log(addone(5));
function addone(num) {
    return num + 1
}

//function but often said as expression - cannot be accesed before declaration
addTwo(5)
const addTwo = function(num){
    return num + 2
}
//hoistic - how function declarailed,functions kept etc