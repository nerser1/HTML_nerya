console.log("script start");
function isNumNaN(num){
    if(isNaN(num)){  
        throw new Error("Invalid input");
    }    
}

function reverseNum(num){
    for(let i = 1; i<= numLength; i++){
        temp = num % 10;
        newNum = newNum + (temp * Math.pow(10,(numLength - i)));
        num = Math.floor(num/10);
    }    
}

let num = +prompt("Enter a number");
let newNum = 0;
let temp = 0;
let numLength = num.toString().length;
isNumNaN(num);
reverseNum(num);
console.log(newNum);
console.log("script end");