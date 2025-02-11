function createCards(array){
    const content = document.getElementById("content")
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const card = document.createElement("div")
        card.classList.add("card")
        card.style = "width: 18rem;";
        card.innerHTML = `
                <div class="card-body">
                    <p class="card-text">${element.id}</p>
                    <h5 class="card-title">${element.title}</h5>
                </div>

                <img src="${element.images}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${element.description}</p>
                    <p class="card-text">${element.price} $</p>
                    <a href="#" class="btn btn-primary">Add To Cart</a>
                </div>`
        content.append(card);
    }
}

createCards(products);