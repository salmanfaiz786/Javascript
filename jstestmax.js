let myarray = [55, 1, 25, 100,60,40]
let max = myarray[0]

    function maxArray(){
        
for (let i=0; i<myarray.length; i++){

    if (max<myarray[i+1]){
        {
            max=myarray[i+1]
        }

        
    }    
  
}

return max;
    }
console.log("maximum number is: "+maxArray());