let number = +prompt('Enter a number: ');
let sum = 0;
while (number >= 1){
  sum += number%10;
  number =parseInt(number/10);
}
console.log(sum);