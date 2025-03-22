
const productsUrl = "https://dummyjson.com/products"
function callGetProducts() {
    showLoader(true)
    fetch(productsUrl).then((result) => { // result = HTTP response object
        result.json().then(data => {
            const products = data.products
            showLoader(false)
            draw(products)
        })
    }).catch(res => console.log(res))
}
function showLoader(show) {
    if (show) {
        document.querySelector("#content").innerHTML = "<h1>Loading...</h1>"
    } else {
        document.querySelector("#content").innerHTML = ""
    }
}

function search(input) {
    fetch(productsUrl).then((result) => {
        result.json().then(data => {
            const products = data.products
            console.log(products)
            if (!Array.isArray(products)) return
            const productSearch = [];
            for (let index = 0; index < products.length; index++) {
                if (products[index].title.toLowerCase().includes(input)) {
                    productSearch.push(products[index])
                }

            }
            showLoader(false)
            draw(productSearch)

        })
    })
}

function init() {
    callGetProducts()
    document.getElementById("increaseCounter").addEventListener("click", () => {
        document.querySelector("#counter").innerText = Number(document.querySelector("#counter").innerText) + 1
    })
    document.getElementById("searchBtn").addEventListener("click", () => {
        const searchInput = document.getElementById("searchText").value;
        showLoader(true)
        search(searchInput);
    })
}


function draw(products) {
    const titles = products.map(p => { return `<h2>${p.title}</h2>` })
    document.querySelector("#content").innerHTML = titles.join("")
}

init()