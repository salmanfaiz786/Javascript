
// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }

function calculateSum(n) {
    let sum = 0;
    let i = 1;
    
    while (i <= n) {
        sum += i;
        i++;
    }
    
    return sum;
}

// Example usage
let n = 5; // Change this value to test with other numbers
let result = calculateSum(n);
console.log("The sum of all natural numbers from 1 to " + n + " is " + result);