let myarray = [55, 1, 25, 100,60,40]
let min = myarray[0]

    function minArray(){
        
for (let i=0; i<myarray.length; i++){

    if (min>myarray[i+1]){
        {
            min=myarray[i+1]
        }

        
    }    
  
}

return min;
    }
console.log("minimum number is: " + minArray());