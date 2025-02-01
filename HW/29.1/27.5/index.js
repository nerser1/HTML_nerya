let num = Number(prompt("Enter a number to sum (if you want to stop insert -99): "));
let sum = 0;
while (num != -99) {
    sum = sum + num;
    num = Number(prompt("Enter a number to sum (if you want to stop insert -99): "));
}
console.log(`The sum of the numbers is: ${sum}`);
