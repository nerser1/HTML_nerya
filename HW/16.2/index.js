console.log(dataJokes)

function printCard(type, setup, punchline, id){
    document.getElementById("content").innerHTML += `<div class="card" style="width: 18rem;">
                            <h6>${type}</h6>
                            <div  class="card-body ${type} d-flex flex-column">
                                <div id="question" class="content_card">
                                <h5 class="card-subtitle mb-2 text-body-secondary">${setup}</h5>
                                <p class="card-text">${punchline} </p>
                                </div>
                                <button href="#" onClick="favoriteMe(dataJokes, ${id})" class="favorite_btn">
                                <i class="bi bi-star"></i>
                                Favorite</button>
                            </div>
                        </div>`
    console.log(document.getElementById("content"))
}

function init(){
    for (let index = 0; index < dataJokes.length; index++) {
        console.log(index)
        const element = dataJokes[index];
        printCard(element.type, element.setup, element.punchline, element.id)
    }
    let favoritesJokes = [];
    if(!localStorage.getItem("favoritesJokes")){
    localStorage.setItem("favoritesJokes", favoritesJokes)
    }  
    getStatistic(dataJokes);


}

function checkDouble(array, id){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element.id == id){
            return true;
        }
    }
    return false;
}

function favoriteMe(dataJokes, id){
    const strFavorites = localStorage.getItem("favoritesJokes");
    const favoriteIndex = dataJokes.findIndex(function(currentJoke){
        return currentJoke.id.toString() === id.toString()
    })
    if (favoriteIndex !== -1){
        if(strFavorites){
            if(Array.isArray(JSON.parse(strFavorites))){
                console.log(JSON.parse(strFavorites))
                let favoritesJokes = JSON.parse(strFavorites);
                const double = checkDouble(favoritesJokes, id);
                if (double == false){
                    favoritesJokes.push(dataJokes[favoriteIndex])
                    localStorage.setItem("favoritesJokes", JSON.stringify(favoritesJokes))        
                }
            }else{
                console.log(JSON.parse(strFavorites))
                let favoritesJokes = [JSON.parse(strFavorites)];
                console.log(favoritesJokes)
                const double = checkDouble(favoritesJokes, id)
                if (double == false){
                    favoritesJokes.push(dataJokes[favoriteIndex])
                    localStorage.setItem("favoritesJokes", JSON.stringify(favoritesJokes))        
                } 
            }
        } else{
            localStorage.setItem("favoritesJokes", JSON.stringify(dataJokes[favoriteIndex]))
        }   
    }
}

init()
