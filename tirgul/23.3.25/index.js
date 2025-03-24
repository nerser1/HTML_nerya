function insertDropdown() {
    const url = 'https://dummyjson.com/products/categories'
    fetch(url).then(success).catch(failed)
    function success(data) {
        data.json().then((s) => {
            const categories = s.map(p => { return `<option>${p.name}</option>` })
            document.getElementById("dropdown").innerHTML = categories.join("")
        })
    }
    function failed() {
        console.log("error")
    }
}

function draw(products) {
    document.getElementById("content").innerHTML = ''
    console.log(products)
    const cards = document.createElement("div")
    cards.classList.add('d-flex', 'flex-wrap', 'gap-3')
    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        const card = document.createElement("div");
        card.classList.add("card")
        const div = document.createElement("div");
        div.classList.add('container')
        const h3 = document.createElement("h3");
        h3.innerText = element.title;
        const p = document.createElement("p")
        p.innerText = element.description;
        div.append(h3, p)
        const img = document.createElement("img")
        img.src = (`${element.images[0]}`)
        card.append(img, div)
        cards.append(card)
    }
    document.getElementById("content").append(cards)
}

function filter() {
    const category = document.getElementById("dropdown").value.toLowerCase()
    fetch(`https://dummyjson.com/products/category/${category}`).then(data => {
        data.json().then((s) => {
            draw(s.products)
        })
    })
}

function drawAll() {
    fetch(`https://dummyjson.com/products`).then(data => {
        data.json().then((s) => {
            draw(s.products)
        })
    })
}

function init() {
    insertDropdown()
    drawAll()
    document.getElementById("dropdown").addEventListener("change", filter)
}

init()