function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    

    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        // Loop through each character of the reference string
        for (let j = 0; j < prefix.length; j++) {
            // If the character at the same position in the current string
            // is not the same, update the prefix to the substring from 0 to j
            if (prefix[j] !== strs[i][j]) {
                prefix = prefix.substring(0, j);
                break;
            }
        }
        // If the current string is shorter than the reference string,
        // update the prefix to the substring of the current string's length
        if (prefix.length > strs[i].length) {
            prefix = strs[i];
        }
    }
    
    return prefix;
}

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight", "float"])); // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // Output: ""