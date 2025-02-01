let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

while (num1 <= num2) {
    console.log(num1);
    num1++;
}