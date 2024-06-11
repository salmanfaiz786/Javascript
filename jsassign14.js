function countUniqueNumbers(searchItem) {
    let str = "00011100001111";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == searchItem) {
            count++;
        }
    } 
    return count;
} 

let resultOnes = countUniqueNumbers('1');
let resultZeros = countUniqueNumbers('0'); 

if(resultOnes > resultZeros){

    console.log("No of 1's are greater");
}
else if(resultZeros > resultOnes){

    console.log("No of 0's are greater");
}

