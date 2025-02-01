let n = Number(prompt("Enter a number: "));
let temp = 0;
if (n % 2 !== 0) {
    n--;
}
while (temp <= n){
    console.log(temp);
    temp += 2;
}