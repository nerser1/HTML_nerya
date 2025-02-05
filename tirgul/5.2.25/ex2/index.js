console.log("script start");

function addProduct(){
    const product = {};
    product.name = prompt("insert product name:");   
    product.price = +prompt("insert product price:");
    product.id = prompt("insert product id:");
    product.createdAt = new Date().toString();
    return product;
}

const product = addProduct();
console.log(product);

console.log("script end");
