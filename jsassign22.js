function Palindrome(input) {
    
    const str = input.toString();
    
    const reverse = str.split('').reverse().join('');
    return str === reverse;
}

console.log(Palindrome(121));