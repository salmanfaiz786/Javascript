function areOpposites(str1, str2) {
    
    if (str1.length !== str2.length) {
        return false;
    }
    
    if (str1 === str2.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(areOpposites("mat", "tam"));
console.log(areOpposites("they", "yeht"));
console.log(areOpposites("mat", "tat"));