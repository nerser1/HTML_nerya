console.log(dataJokes)

function printCard(type, setup, punchline, id){
    document.getElementById("content_favorites").innerHTML += `<div class="card" style="width: 18rem;">
                            <h6>${type}</h6> 
                            <div class="card-body ${type} d-flex flex-column">
                                <div id="content_card" onClick="punch(${punchline})" class="content_card">
                                <h5 class="card-subtitle mb-2 text-body-secondary">${setup}</h5>
                                <p class="card-text">${punchline} </p>
                                </div>
                                <button href="#" onClick="unfavoriteMe(${id})" class="favorite_btn">
                                <i class="bi bi-star-fill"></i>
                                Unfavorite</button>
                            </div>
                        </div>`
    console.log(document.getElementById("content"))
}
function printCardArray(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        printCard(element.type, element.setup, element.punchline, element.id)
    }
}


function init(){
    const strFavorites = localStorage.getItem("favoritesJokes");
    if(strFavorites){
        if(Array.isArray(JSON.parse(strFavorites))){
            console.log(JSON.parse(strFavorites))
            const favoritesJokes = JSON.parse(strFavorites);
            printCardArray(favoritesJokes)
        }else{
            console.log(JSON.parse(strFavorites))
            const favoritesJokes = JSON.parse(strFavorites);
            console.log(favoritesJokes)
            printCard(favoritesJokes.type, favoritesJokes.setup, favoritesJokes.punchline, favoritesJokes.id)
        }

    }
    const contentCard = document.getElementById("content_card")
    contentCard.addEventListener("click", function(){
        contentCard.append("")
    })

}

function unfavoriteMe(id){
    const strFavorites = localStorage.getItem("favoritesJokes");
        if(strFavorites){
            if(Array.isArray(JSON.parse(strFavorites))){
                console.log(JSON.parse(strFavorites))
                const favoritesJokes = JSON.parse(strFavorites);
                const unfavoriteIndex = favoritesJokes.findIndex(function(currentJoke){
                    return currentJoke.id.toString() === id.toString()
                })           
                if (unfavoriteIndex !== -1){ 
                favoritesJokes.splice(unfavoriteIndex, 1)
                localStorage.setItem("favoritesJokes", JSON.stringify(favoritesJokes)) 
                }   
            }else{
                console.log(JSON.parse(strFavorites))
                const favoritesJokes = [JSON.parse(strFavorites)];
                const unfavoriteIndex = favoritesJokes.findIndex(function(currentJoke){
                    return currentJoke.id.toString() === id.toString()
                })     
                if (unfavoriteIndex !== -1){       
                favoritesJokes.splice(favoritesJokes[0])
                localStorage.setItem("favoritesJokes", "")
                }

            }  
        }
        document.getElementById("content_favorites").innerHTML = ""
        init()

}

init()
