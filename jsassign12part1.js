let namesEven = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama", "Salman"];
let namesOdd = ["Farrukh", "Asad", "Naveed", "Farhan", "Osama", "Salman", "Shahzadi"];

let even = namesEven.length;
let odd = namesOdd.length;

function checkOdd(namesOdd){
    if (namesOdd % 2 == 1) {
        return true;
       // console.log("Your input array is Odd"); 
        
    } 
}

function checkEven(namesEven){
    if (namesEven % 2 == 0) {
        return true;
       // console.log("Your input array is Even");
    }
}
console.log(checkOdd(odd));
console.log(checkEven(even));