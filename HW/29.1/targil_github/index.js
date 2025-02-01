let n = 0;
let highestPrice = 0;
let highestPriceProduct = '';
while (n < 5) {
    const product = prompt('Enter product name:');
    const price = Number(prompt('Enter product price:'));
    if (price > highestPrice) {
        highestPrice = price;
        highestPriceProduct = product;
    }
    n++;
}
console.log(`The highest price product is: ${highestPriceProduct} and the price is: ${highestPrice}`);