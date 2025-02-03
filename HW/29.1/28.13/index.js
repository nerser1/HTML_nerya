let x = +prompt('Enter a very big number: ');
let dig = +prompt('Enter a digit: ');
let sum = 0;

while (x >= 1){
  const lastDigit = x % 10;
  if (lastDigit === dig){
    sum++;
  }
  x = parseInt(x / 10);
}
console.log(sum);