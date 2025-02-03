console.log("script start");
let num1 = +prompt("Enter the lowest number");
let num2 = +prompt("Enter the highest number");

if(isNaN(num1) || isNaN(num2)){
    console.error("Invalid input");
    process.exit();
}
for(let i = num1; i<= num2; i++){
    console.log(i);
}
for(let i = num2 - 1; i>= num1; i--){
    console.log(i);
}
console.log("script end")