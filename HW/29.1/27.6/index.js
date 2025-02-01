let num = Number(prompt("Enter a number to average (if you want to stop enter '0'): "));
let n = 0;
let sum = 0;
while (num !== 0) {
    sum += num;
    n++;
    num = Number(prompt("Enter a number to average (if you want to stop enter '0'): "));
}
console.log(`The average of the numbers is: ${sum / (n)}`);