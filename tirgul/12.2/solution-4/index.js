let productsArray = products.products

function init() {
    loadCards(productsArray)

    document.getElementById("searchBtn").addEventListener("click", function (){
        const textSearch = document.getElementById("inputSearch")
        const result = searchInput(productsArray, textSearch.value)
        loadCards(result)

    })
}
init();
function getCardTemplate(id, description, title, image, price) {
    return `<div id="${id}" class="card card-width">
                <h2>${title}</h2>
                <h2>${id}</h2>
                <img height="300" width="300" src="${image}" alt="">
                <p>${description}</p>
                <h3>price: ${price}</h3>
                <h3> <button class="btn btn-danger" onClick="deleteMe(${id})"> Delete </button> </h3>
                </div>`
}
function searchInput(array, inputSearch) {
    // document.getElementById(id)?.remove() // NO DONT DEL FROM DOM
    console.log("searching...")
    if(!Array.isArray(array)) return;
    if(typeof inputSearch !== 'string') return;
    if(inputSearch == "") return array;
    console.log("searching...") 
    let newArraySearch = []
    const toLowerInputSearch = inputSearch.toLowerCase()
    console.log(toLowerInputSearch)
    for (let index = 0; index < array.length; index++) {
        const product = array[index]
        if (product?.title?.toLowerCase().includes(toLowerInputSearch)) {
            newArraySearch.push(array[index])
        }
    }
    return newArraySearch
}
function deleteMeNEWJS(id) {
    const deletedIndex = productsArray.findIndex(function (currentProduct) {
        return currentProduct.id.toString() === id.toString()
    })
    if (deletedIndex !== -1) {
        productsArray.splice(deletedIndex, 1)
    }
    loadCards(productsArray)
}
function deleteMe(id) {
    // document.getElementById(id)?.remove() // NO DONT DEL FROM DOM
    const newArrayWithoutDeletedId = []
    for (let index = 0; index < productsArray.length; index++) {
        if (productsArray[index].id.toString() !== id.toString()) {
            newArrayWithoutDeletedId.push(productsArray[index])
        }
    }
    productsArray = newArrayWithoutDeletedId
    loadCards(productsArray)
}
function loadCards(arrayOfProducts) {
    if (!Array.isArray(arrayOfProducts)) return; // validate that arrayOfCars is array
    if (arrayOfProducts.length === 0) return; // validate that there is data inside the array
    const content = document.getElementById("content")
    content.innerHTML = ""
    for (let index = 0; index < arrayOfProducts.length; index++) {
        const currentProduct = arrayOfProducts[index]
        const cardHtml = getCardTemplate(currentProduct.id, currentProduct.description, currentProduct.title, currentProduct.images[0], currentProduct.price)
        content.innerHTML += cardHtml
    }

}
