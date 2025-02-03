let num = +prompt("Enter a number");
let newNum = 0;
let temp = 0;
let numLength = num.toString().length;

if(isNaN(num)){  
    console.error("Invalid input");
    process.exit();
}
for(let i = 1; i<= numLength; i++){
    temp = num % 10;
    newNum = newNum + (temp * Math.pow(10,(numLength - i)));
    num = Math.floor(num/10);
}
console.log(newNum);
console.log("script end")