function findCount(searchItem) {
    let names = ["Salman", "Farhan", "Adeel", "Osama", "Salman", "Salman"];
    let count = 0;
    for (let i = 0; i < names.length; i++) {
        if (names[i] == searchItem) {
            count++;
        }
    } 
    return count;
} 

let result = findCount("Salman"); 
console.log(result);