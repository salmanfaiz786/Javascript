function isValid(s) {
    // Create a stack to keep track of opening brackets
    let stack = [];
    // Create a map to store the matching pairs of brackets
    let matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate through each character in the string
    for (let char of s) {
        // If the character is a closing bracket
        if (char in matchingBrackets) {
            // Pop the top element from the stack, if the stack is empty use a dummy value
            let topElement = stack.length === 0 ? '#' : stack.pop();
            // If the top element does not match the corresponding opening bracket, return false
            if (topElement !== matchingBrackets[char]) {
                return false;
            }
        } else {
            // If the character is an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all brackets were matched correctly, return true
    return stack.length === 0;
}

// Example usage
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false