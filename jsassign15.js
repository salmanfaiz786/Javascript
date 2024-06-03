function countZerosOnes(){
    let str = "1011100000000111";
    let ones=0;
    let zeroes=0;

    for(let i=0; i<str.length; i++){

        if (str[i].includes('1'))
            ones++;
        else if (str[i].includes('0'))
            zeroes++;
    }

    if(ones>zeroes){
        console.log('Ones greater');
    }
    else if(ones<zeroes){
        console.log('Zeros greater');
    }else{
        console.log('Both are equal')
    }

}

countZerosOnes();




// // let str = "10111000111";
// let count = 0;

// function countUniqueNumbers(searchItem) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == searchItem) {
//             count++;
//         }
//     } 
//     return count;
// } 

// let resultOnes = countUniqueNumbers('1');
// let resultZeros = countUniqueNumbers('0'); 

// if(resultOnes > resultZeros){

//     console.log("No of 1's are greater");
// }
// else if (resultZeros > resultOnes){

//     console.log("No of 0's are greater");
// }

// else {

//     console.log("No of 0's are equals to number of 1's");
// }

