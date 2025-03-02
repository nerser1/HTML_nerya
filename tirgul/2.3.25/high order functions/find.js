function findP(id) {
    for (let index = 0; index < data.products.length; index++) {
        if (data.products[index].id === id) {
            return data.products[index]
        }
    }
}

const singleObject = data.products.find((c) => c.id === 27)

// input id 27
function findPindex(id) {
    for (let index = 0; index < data.products.length; index++) {
        if (data.products[index].id === id) {
            return index
        }
    }
    return null;
}

const productIndex = data.products.findIndex((c) => c.id === 27)
if (productIndex > -1) data.products.splice(productIndex, 1)

console.log("singleObject", singleObject)

function findChipProductIndex(price) {
    for (let index = 0; index < data.products.length; index++) {
        if (data.products[index].price < price) {
            return index
        }
    }
    return null;
}


const filterChipProduct = data.products.filter((currentProduct) => currentProduct.price < 50).map((c) => c.id)
console.log(filterChipProduct)



// array of products ids for all the products with price lower than 50
// array of products return policies for all the products with minimumOrderQuantity > 10