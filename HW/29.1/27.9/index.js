let counter = 1;
let maxNumber = 1;
let maxValue = 0;

while (counter <= 100) {
  const number = +prompt('Enter a number: ');
  if (number > maxValue) {
    maxNumber = counter;
    maxValue = number;
  }
    counter++;
}
console.log(maxNumber);