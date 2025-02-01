let num = Number(prompt("Enter a number: "));
let big = num;
while (num > 0){
    num = Number(prompt("Enter a number: "));
    if (num > big){
        big = num;
    }       
}
console.log(`${big} is the biggest number.`);